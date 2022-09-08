import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { GoX } from "react-icons/go";
const Submenu = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="lg:hidden md:hidden sm:block ">
      <div className="flex justify-between pt-4 container h-20">
        <div>
          {show ? (
            <GoX
              className="text-3xl font-bold"
              onClick={() => setShow(!show)}
            />
          ) : (
            <AiOutlineMenu
              className="text-3xl font-bold"
              onClick={() => setShow(!show)}
            />
          )}

          {show ? (
            <ul className="text-black">
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
          ) : (
            ""
          )}
        </div>
        <div>
          <img src={logo} className="" alt="" />
        </div>

        <div>
          <ul>
            <li className="">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
