import React from "react";
import CountUp from "react-countup";
import { BsFillFlagFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

const BusinessSummary = () => {
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold  uppercase">
          millions business trust us
        </h1>
        <p className="text-xl font-semi-bold mt-3 uppercase">
          try to understand user expection
        </p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-10 py-10 px-12">
        <div
          class="card w-mx-lg bg-base-100 shadow-xl text-2xl "
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <p className=""></p>
          <div class="card-body items-center text-center">
            <p className="text-green-700 text-5xl">
              <BsFillFlagFill />
            </p>
            <CountUp start={0} end={1000}></CountUp>
            <p className="text-bold">Countries</p>
          </div>
        </div>
        <div
          class="card w-mx-lg bg-base-100 shadow-xl text-2xl "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p className=""></p>
          <div class="card-body items-center text-center">
            <p className="text-green-700 text-5xl">
              <FiMonitor />
            </p>
            <CountUp start={0} end={535} suffix="+"></CountUp>
            <p className="text-bold">Complete Project</p>
          </div>
        </div>
        <div
          class="card w-mx-lg bg-base-100 shadow-xl text-2xl "
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <p className=""></p>
          <div class="card-body items-center text-center">
            <p className="text-green-700 text-5xl">
              <IoIosPeople />
            </p>
            <CountUp start={0} end={1000} suffix="+"></CountUp>
            <p className="text-bold">Happy Clients</p>
          </div>
        </div>
        <div
          class="card w-mx-lg bg-base-100 shadow-xl text-2xl "
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p className=""></p>
          <div class="card-body items-center text-center">
            <p className="text-green-700 text-5xl">
              <AiFillLike />
            </p>
            <CountUp start={0} end={1000} suffix="+"></CountUp>
            <p className="text-bold">Feedback</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSummary;
