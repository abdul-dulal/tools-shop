import React from "react";
import banner from "../../../assets/sale-bg-2.59eda44e7f15738b.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className=" container py-32 mt-14"
        style={{
          background: `url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ml-24">
          <p>
            Sale offer <span className="text-[#FF6A00]">- 30% off</span>{" "}
          </p>
          <h1 className="text-2xl font-bold">
            All Types Of Premium Quality Tools
          </h1>
          <button className=" w-36 h-12 rounded mt-3 bg-[#FF6A00] duration-500 flex justify-center items-center text-white">
            Show Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
