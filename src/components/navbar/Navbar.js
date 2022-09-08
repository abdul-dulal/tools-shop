import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/img/white-logo.png";
import auth from "../../Firebaseinit";
import Logout from "../page/login/Logout";
import Submenu from "./Submenu";
const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <div className="bg-primary lg:block md:block hidden">
        <div className="flex justify-between items-center container h-20">
          <div>
            <img src={logo} className="" alt="" />
          </div>
          <ul className="flex lg: gap-14 md:gap-10 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop"> Shop</Link>
            </li>
            <li>
              <Link to="/dashboard"> Dashborad</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
          <div>
            <ul>
              <li className="text-white">
                {user ? <Logout /> : <Link to="/signup">Signup</Link>}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Submenu />
    </div>
  );
};

export default Navbar;
