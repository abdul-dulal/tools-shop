import React from "react";
import power from "../../../assets/category/popular/product-25.png";
import machine from "../../../assets/category/popular/mechinge-26.png";
import hand from "../../../assets/category/popular/hand.png";
import corldess from "../../../assets/category/popular/corldess.png";
import welding from "../../../assets/category/popular/welding.png";
import socket from "../../../assets/category/popular/soket.png";
import Category from "./Category";
import underline from "../../../assets/underline.png";
const PopularCategory = () => {
  return (
    <div>
      <h1 className="text-3xl font-serif text-center my-2">Popular Category</h1>
      <img src={underline} className="block mx-auto mb-8" alt="" />
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        <Category img={power} title="Power Tools" />
        <Category img={machine} title="Machine Tools" />
        <Category img={hand} title="Hand Tools" />
        <Category img={corldess} title="Cordless Tools" />
        <Category img={welding} title="Welding &amp; Soldering" />
        <Category img={socket} title="Socket Wrenches" />
      </div>
    </div>
  );
};

export default PopularCategory;
