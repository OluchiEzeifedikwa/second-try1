import { createContext, useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ✅ Fetch profile on mount if user is logged in
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get("/profile"); // cookie sent automatically
        setUser(res.data);
      } catch (err) {
        setUser(null); // 401 or other errors → user not logged in
      }
    };
    fetchProfile();
  }, []);

  // SIGNUP
  const signup = async (email, username, password) => {
    const res = await axiosInstance.post("/signup", { email, username, password });
    return res.data;
  };

  // LOGIN
  const login = async (email, password) => {
    // login sets the cookie
    await axiosInstance.post("/login", { email, password });
    // now fetch profile
    const profile = await axiosInstance.get("/profile");
    setUser(profile.data);
    return profile.data;
  };

  // LOGOUT
  const logout = async () => {
    await axiosInstance.post("/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// POST
const createPost = async (title, content) => {
  try {
    const response = await axiosInstance.post("/posts", {
      title,
      content
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

