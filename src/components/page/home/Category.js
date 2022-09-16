import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ img, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center cursor-pointer px-6 border  shadow hover:border-[#FF6A00] duration-500 rounded">
        <div>
          <h1 className="text-[23px] font-serif hover:text-[#FF6A00] duration-500">
            {title}
          </h1>
          <p>14 products</p>
          <button
            onClick={() => navigate("/shop")}
            className="pt-3  hover:tracking-widest duration-500	hover:text-[#FF6A00]"
          >
            Show Now
          </button>
        </div>
        <div>
          <img src={img} className=" h-44" alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Category;
