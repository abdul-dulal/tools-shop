import React, { useEffect, useState } from "react";
import feature from "../../../assets/category/popular/featured-offer-img-2.067ace69d773bbdb.png";
import underline from "../../../assets/underline.png";
import { Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import axios from "axios";
import Ratting from "../../shere/Ratting";
import { useNavigate } from "react-router-dom";

const FeatureProduct = () => {
  const [featureProduct, setFeatureProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://tools-shop-backend.onrender.com/product/getProduct")
      .then((res) => setFeatureProduct(res.data));
  }, []);

  return (
    <div className="container lg:grid lg:grid-cols-4  my-10  gap-6">
      <div
        className="h-[560px] w-full  lg:block md:hidden sm:hidden"
        style={{
          background: `url(${feature})`,
        }}
      >
        <div className="ml-5 mt-8 space-y-3">
          <p>Best Deals</p>
          <h1 className="text-2xl font-serif">Premium Tools Sets</h1>
          <p>upto 35% discount</p>
          <p className="underline cursor-pointer">Show Now</p>
        </div>
      </div>
      <div className=" lg:col-span-3 ">
        <div>
          <h1 className="text-3xl font-serif">Featured Products</h1>
          <img src={underline} className="mt-2" alt="" />
        </div>
        <div className=" mt-4   ">
          <Swiper
            breakpoints={{
              425: {
                width: 425,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              970: {
                width: 970,
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, A11y]}
            spaceBetween={20}
            autoplay={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {featureProduct.map((product) => (
              <SwiperSlide key={product._id}>
                <div className="  mt-3 shadow hover:border-[#FF6A00] hover:border duration-500 cursor-pointer">
                  <div className=" border hover:border-0 ">
                    <img
                      src={product.img}
                      className="hover:scale-90 duration-1000"
                      alt=""
                    />
                  </div>
                  <div className="border space-y-2 px-3 py-2 hover:border-0 duration-500 ">
                    <h1>{product.pName}</h1>
                    <p>Available Quantity : {product.quantity}</p>
                    <p>Minimum Order Quantity : {product.minQuantity}</p>
                    <p className="mt-2">Price ${product.price}</p>
                    <Ratting />
                    <div
                      onClick={() => navigate(`/purchase/${product._id}`)}
                      className=" w-36 h-12 rounded mt-3 bg-[#FF6A00] duration-500 flex justify-center items-center text-white"
                    >
                      Buy Now
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
