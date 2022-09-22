import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";

const UserDeatils = ({ newUser, index, refetch }) => {
  const [user] = useAuthState(auth);
  const { email, role } = newUser;
  const currentUser = { email: email, role: "admin" };

  const makeAdmin = () => {
    fetch(`http://localhost:3000/user/makeAdmin/${email}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(currentUser),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        refetch();
        toast.success("successfully made an admin");
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.displayName}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} class="btn w-32  h-8 text-white rounded">
            Make Admin
          </button>
        ) : (
          <span className="text-orange-700 font-bold">Admin</span>
        )}
      </td>
    </tr>
  );
};

export default UserDeatils;
