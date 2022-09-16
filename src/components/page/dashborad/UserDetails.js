import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";

const UserDeatils = ({ newUser, index, refetch }) => {
  const [user] = useAuthState(auth);
  const { email, role } = newUser;
  const currentUser = { email: email };
  const makeAdmin = () => {
    fetch(`https://secret-brook-35937.herokuapp.com/user/admin/${email}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(currentUser),
    })
      .then((response) => {
        if (response.status === 403) {
          toast.error("Fail to Make Admin");
        }
        return response.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfully made an admin");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.displayName}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} class="btn btn-xs">
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
