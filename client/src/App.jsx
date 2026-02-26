import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import CreatePost from "./components/CreatePost.jsx";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/profile" element={<Profile />} />    
        <Route path="/posts" element={<CreatePost />} /> 
      </Routes>
  </div>
  );
}


