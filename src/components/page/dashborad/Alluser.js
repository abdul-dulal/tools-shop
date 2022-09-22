import React, { useEffect } from "react";
import { useQuery } from "react-query";
import UserDeatils from "../../../components/page/dashborad/UserDetails";
import Loading from "../../shere/Loading";
const Alluser = () => {
  const {
    isLoading,
    data: users,
    refetch,
  } = useQuery("repoData", () =>
    fetch("http://localhost:3000/user/all_user", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default Alluser;
