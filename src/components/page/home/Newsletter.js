import React from "react";
import logo from "../../../assets/img/white-logo.png";
const Newsletter = () => {
  return (
    <div className="bg-primary">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-4 container py-20">
        <div>
          <img src={logo} className="" alt="" />
        </div>
        <div className="text-white">
          <p>30% Discount For Your First Order</p>
          <h1 className="text-2xl font-serif"> Subscribe To Our Newsletter</h1>
          <p>Subscribe to the newsletter for all the latest updates</p>
        </div>
        <div className="lg:col-span-2">
          <input
            type="text"
            name=""
            id=""
            className="lg:w-80 md:w-80 px-3 h-14 rounded"
            placeholder="Your Email Address"
          />
          <input
            type="submit"
            className="border border-primary rounded h-14 w-32 bg-white lg:ml-2 lg:mt-0 md:mt-3"
            value="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
