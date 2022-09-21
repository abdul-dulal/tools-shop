import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../Firebaseinit";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="/dashboard/addproduct"> Add Product</NavLink>
            </li>
            {!admin && (
              <li>
                <NavLink to="/dashboard/myorder"> My Order</NavLink>
              </li>
            )}
            {!admin && (
              <li>
                <NavLink to="/dashboard/addreview"> Add Review</NavLink>
              </li>
            )}

            {admin && (
              <>
                <li>
                  <Link to="/dashboard/make_admin">Make Admin</Link>
                </li>
                <li>
                  <NavLink to="/dashboard/manageorder"> Mange Orders</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
