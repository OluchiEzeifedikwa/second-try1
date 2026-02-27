import { createContext } from "react";
import axiosInstance from "../axiosInstance";

export const PostContext = createContext();

export function PostProvider({ children }) {

  const createPost = async (title, content) => {
    try {
      const res = await axiosInstance.post(
        "/posts",
        { title, content },
      );

      return res.data;
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to create post"
      );
    }
  };

  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
}