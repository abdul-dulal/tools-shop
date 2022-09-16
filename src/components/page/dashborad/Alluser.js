import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../../shere/Loading";
import UserDeatils from "./UserDetails";

const Alluser = ({ profile }) => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("repoData", () =>
    fetch("https://secret-brook-35937.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserDeatils
                key={user._id}
                newUser={user}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
