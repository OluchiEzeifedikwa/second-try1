import express from "express";
import { createPost } from "../controllers/postController.js";
import { authenticateToken } from "../middleware/authMiddleWare.js";


const router = express.Router();

router.post("/", authenticateToken, createPost);

export default router;