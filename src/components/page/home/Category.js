import React from "react";

const Category = ({ img, title }) => {
  return (
    <div>
      <div className="flex justify-between items-center cursor-pointer px-6 border  shadow hover:border-[#FF6A00] duration-500 rounded">
        <div>
          <h1 className="text-[23px] font-serif hover:text-[#FF6A00] duration-500">
            {title}
          </h1>
          <p>14 products</p>
          <button className="pt-3  hover:tracking-widest duration-500	hover:text-[#FF6A00]">
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
