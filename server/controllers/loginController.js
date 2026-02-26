// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const prisma = new PrismaClient();


// // 🔐 LOGIN
// export const login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       if (!email || !password) {
//         return res.status(400).json({ message: "Email and password required" });
//       }
  
//       const user = await prisma.user.findUnique({
//         where: { email },
//       });
  
//       if (!user) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }
  
//       const match = await bcrypt.compare(password, user.password);
  
//       if (!match) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }

//       // ✅ Create JWT
//     const token = jwt.sign(
//         { userId: user.id },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );
  
//       // ✅ Send cookie
//       res.cookie("jwt", token, {
//         httpOnly: true,
//         secure: false, // change to true in production
//         sameSite: "lax",
//         maxAge: 1000 * 60 * 60,
//       });
  
//       res.json({ message: "Login successful" });
  
//     } catch (error) {
//       res.status(500).json({ message: "Server error" });
//     }
//   };
  
  
