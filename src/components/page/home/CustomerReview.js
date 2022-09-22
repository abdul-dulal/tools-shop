import axios from "axios";
import React, { useEffect, useState } from "react";
import { Autoplay, A11y, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Ratting from "../../shere/Ratting";
import underline from "../../../assets/underline.png";
import { useNavigate } from "react-router-dom";

const CustomerReview = () => {
  const [flashDeals, setFlashDeals] = useState([]);
  const [review, setRevies] = useState([]);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`purchase/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/flash-deals")
      .then((res) => setFlashDeals(res.data));
    axios
      .get("http://localhost:3000/review/getReview")
      .then((res) => setRevies(res.data));
  }, []);

  return (
    <div className="container lg:grid lg:grid-cols-4 gap-7 my-16">
      <div className="lg:block md:hidden sm:hidden">
        <h1 className="text-3xl font-serif">Customer Review</h1>
        <img src={underline} alt="" />
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {review.map((review) => (
            <SwiperSlide>
              <div className="flex mt-8">
                <img src={review.img} alt="" />
                <p className="mt-5 ml-2">{review.name}</p>
              </div>
              <p>"{review.review}"</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:col-span-3  lg:mt-0 md:mt-0 mt-10 ">
        <h1 className="text-3xl font-serif">Flash Deals</h1>
        <img src={underline} alt="" />

        <Swiper
          breakpoints={{
            425: {
              width: 425,
              slidesPerView: 1,
            },
            688: {
              width: 688,
              slidesPerView: 2,
            },
            950: {
              width: 950,
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay, A11y, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="border border-[#FF6A00] my-10 "
        >
          {flashDeals.map((flashDeal) => (
            <SwiperSlide>
              <div className="my-4">
                <div className="grid lg:grid-cols-2  gap-3  justify-between items-center ">
                  <div>
                    <img src={flashDeal.img} alt="" />
                  </div>
                  <div className="space-y-2">
                    <p>{flashDeal.pName.slice(0, 47)}</p>
                    <p>Available Quantity : {flashDeal.quantity}</p>
                    <p> Order Quantity : {flashDeal.minQuantity}</p>
                    <Ratting />
                    <p className="text-[#FF6A00]">Price : ${flashDeal.price}</p>
                    <p
                      onClick={() => handleNavigate(flashDeal._id)}
                      className=" w-36 h-12 rounded mt-3 bg-[#FF6A00] duration-500 flex justify-center items-center text-white cursor-pointer"
                    >
                      Buy Now
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
