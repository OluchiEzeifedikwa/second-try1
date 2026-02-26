// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const prisma = new PrismaClient();

// // 📝 SIGNUP
// export const signup = async (req, res) => {
//     try {
//       const { email, username, password } = req.body;
  
//       if (!email || !username || !password) {
//         return res.status(400).json({ message: "All fields required" });
//       }
  
//       const hashed = await bcrypt.hash(password, 10);
  
//       const user = await prisma.user.create({
//         data: {
//           email,
//           username,
//           password: hashed,
//         },
//       });
  
//       res.status(201).json({
//         message: "Signup successful",
//         user: {
//           email: user.email,
//           username: user.username,
//         },
//       });
  
//     } catch (error) {
//       res.status(400).json({ message: "User already exists" });
//     }
//   };



