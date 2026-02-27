import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import postRoutes from "./routes/postRoutes.js";

// import signupRoutes from "./routes/signupRoutes.js";
// import loginRoutes from "./routes/loginRoutes.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());
// app.use("/signup", signupRoutes);
// app.use("/login", loginRoutes);

// ✅ CORS with credentials
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true
}));

app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// -------------------
// Signup route
// -------------------
app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  console.log(req.body);
  if (!email || !username || !password) return res.status(400).json({ message: "All fields required" });

  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { email, username, password: hashed }
    });
    res.json({ message: "Signup successful", user: { email: user.email, username: user.username } });
  } catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
});

// // -------------------
// // Login route
// // -------------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password required" });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  // ✅ Create JWT
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  // ✅ Send cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,      // ⚠️ false for local dev over HTTP
    sameSite: "lax",    // allows frontend to send cookie
    maxAge: 1000 * 60 * 60
  });

  res.json({ message: "Login successful" });
});

// -------------------
// Profile route
// -------------------
app.get("/profile", async (req, res) => {
  try {
    const token = req.cookies.jwt;
    console.log("Cookies:", req.cookies);
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: { profile: true },
    });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ email: user.email, username: user.username, profile: user.profile });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// -------------------
// Logout route
// -------------------
app.post("/logout", (req, res) => {
  res.clearCookie("jwt", { httpOnly: true, sameSite: "lax" });
  res.json({ message: "Logged out" });
});

// -------------------
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));