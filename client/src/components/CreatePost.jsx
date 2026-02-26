import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { PostContext } from "../context/PostContext.jsx";

export default function CreatePost() {
  const { user } = useContext(AuthContext);
  const { createPost } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return alert("You must be logged in to create a post!");

    try {
      await createPost(title, content, user.id);
      alert("Post created!");
      setTitle("");
      setContent("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
}