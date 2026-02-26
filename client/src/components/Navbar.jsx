import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "20px", fontFamily: "sans-serif", backgroundColor: "burlywood"}}>
      <Link to="/">Home</Link>

      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <>
          <span>Welcome {user.username}</span>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}