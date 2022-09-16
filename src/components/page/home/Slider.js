import React from "react";
import { Pagination, A11y, Autoplay, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import "./main.css";
import slider1 from "../../../assets/slider/slider1.jpg";
import slider2 from "../../../assets/slider/slider2.jpg";
import slider3 from "../../../assets/slider/slider3.jpg";
import sidebar1 from "../../../assets/img/sidebar1.jpg";
import sidebar2 from "../../../assets/img/sidebar2.jpg";
import Fade from "react-reveal/Fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-1  gap-5 my-10 mb-14">
      <div className="lg:col-span-3 lg:block md:block hidden">
        <Swiper
          modules={[Pagination, A11y, Autoplay, Lazy]}
          pagination={{ clickable: true }}
          // slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={true}
          lazy={true}
        >
          <SwiperSlide>
            <div
              className="lg:h-[550px] md:h-[350px] sm:h-[300px] w-full flex items-center "
              style={{
                background: `url(${slider1})`,
              }}
            >
              <div className="ml-10 space-y-3 ">
                <Fade left>
                  <p>Special offer</p>
                  <h1 className="text-4xl font-bold">
                    Best Collection For Home
                  </h1>
                  <h1 className="text-4xl font-bold"> Decoration 2021</h1>
                  <p className="text-medium mt-4">from $159</p>
                </Fade>
                <div
                  onClick={() => navigate("/shop")}
                  class="w-40 h-12 bg-primary text-center text-white pt-3"
                >
                  Shop Now
                </div>
                ;
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="lg:h-[550px] md:h-[350px]  w-full flex items-center"
              style={{
                background: `url(${slider2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="ml-10 space-y-3 ">
                <Fade left>
                  <p>Special offer</p>
                  <h1 className="text-4xl font-bold">All type of Premium</h1>
                  <h1 className="text-4xl font-bold"> Quality Tools</h1>
                  <p className="text-medium mt-4">from $199</p>
                </Fade>
                <div
                  onClick={() => navigate("/shop")}
                  class="w-40 cursor-pointer h-12 bg-primary text-center text-white pt-3"
                >
                  Shop Now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="lg:h-[550px] md:h-[350px]  w-full flex  items-center"
              style={{
                background: `url(${slider3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="ml-10 space-y-3 ">
                <Fade left>
                  <p>Special offer</p>
                  <h1 className="text-4xl font-bold">All type of Premium</h1>
                  <h1 className="text-4xl font-bold"> Quality Tools</h1>
                  <p className="text-medium mt-4">from $199</p>
                </Fade>
                <div
                  onClick={() => navigate("/shop")}
                  class="w-40 h-12 bg-primary text-center text-white pt-3"
                >
                  Shop Now
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div
          className="h-[260px]  w-full"
          style={{
            background: `url(${sidebar1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="ml-8 pt-4">
            <h1 className="text-[25px] text-white">Power Tools</h1>
            <p className="text-[20px] font-semibold ">40% Off</p>
            <button className="pt-3  hover:tracking-widest duration-500	hover:text-[#FF6A00]">
              Show Now
            </button>
          </div>
        </div>
        <div
          className="h-[260px] w-full mt-8"
          style={{
            background: `url(${sidebar2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",

            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="ml-8 pt-4">
            <h1 className="text-[25px] text-[#FF6A00]">Hands Tools</h1>
            <p className="text-[20px] font-semibold ">30% Off</p>
            <button className="pt-3  hover:tracking-widest duration-500	hover:text-[#FF6A00]">
              Show Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
