import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../../Firebaseinit";
const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("token");
  };
  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Logout;
