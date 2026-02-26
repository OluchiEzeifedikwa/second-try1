// src/context/PostContext.jsx
import { createContext } from "react";
import axiosInstance from "../axiosInstance";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const createPost = async (title, content, authorId) => {
    try {
      const res = await axiosInstance.post("/posts", { title, content, authorId });
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
};