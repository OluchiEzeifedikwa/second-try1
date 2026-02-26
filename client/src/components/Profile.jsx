import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>No user logged in</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {user.profile && (
        <>
          <p>Bio: {user.profile.bio}</p>
          <p>Avatar: {user.profile.avatar}</p>
        </>
      )}
    </div>
  );
}