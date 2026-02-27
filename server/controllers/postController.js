
import prisma from "../prisma/client.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: req.userId // assuming you store user in req.user from auth middleware
      }
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to create post" });
  }
};