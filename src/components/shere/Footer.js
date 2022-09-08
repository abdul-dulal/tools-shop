import React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BsTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container">
      <footer class="footer p-10 ">
        <div className="space-y-2">
          <span class=" text-2xl font-serif text-black">Quick Information</span>
          <div className="flex  gap-2 items-center">
            <GoLocation className="text-2xl text-[#FF6A00]" />
            <p className="text-[15px] text-gray-600">
              2491 Reel Avenue Albuquerque, NM
            </p>
          </div>
          <div className="flex  gap-2 items-center">
            <BsTelephoneFill className="text-2xl text-[#FF6A00]" />
            <p className="text-[15px] text-gray-600">+1 (514) 321-4566</p>
          </div>
          <div className="flex  gap-2 items-center">
            <CgMail className="text-2xl text-[#FF6A00]" />
            <p className="text-[15px] text-gray-600">hello@gmail.com</p>
          </div>
          <div className="flex  gap-2 items-center">
            <AiOutlineFieldTime className="text-2xl text-[#FF6A00]" />
            <p className="text-[15px] text-gray-600">
              Mon-Sat 8:00 AM - 8:00 PM
            </p>
          </div>
          <div className="flex  gap-2 items-center">
            <p>Stay connect</p>
            <div className="flex gap-2 text-gray-600">
              <FaFacebookF />
              <AiOutlineTwitter />
              <FaLinkedinIn />
              <FaPinterestP />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-2xl font-serif text-black">Information</span>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Our company
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Contact us
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Our services
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Why We?
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Careers
          </Link>
        </div>
        <div className="space-y-2">
          <span className="text-2xl font-serif text-black">
            Customer Service
          </span>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Blog
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Contact
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Return Policy
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Online Support
          </Link>
          <Link to={""} class="link link-hover text-[15px] text-gray-600">
            Money Back
          </Link>
        </div>
        <div>
          <span class="text-2xl font-serif">Download App On Mobile</span>
          <div className=" ">
            <div>
              <div>
                <p>30% discount on your first order</p>
                <div className="flex gap-4 mt-5">
                  <div>
                    <button className="flex items-center justify-center border-2 border-black w-32 h-10 ">
                      <AiFillApple className="text-xl" />
                      <span className="mt-2">App Store</span>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center gap-1 justify-center border-2 border-black w-32 h-10 ">
                      <FaGooglePlay className="mt-2 " />
                      <span className="mt-2">Google Play</span>
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <p>We Accept Payment Via</p>
                  <div className="flex text-3xl gap-5 mt-3">
                    <FaCcVisa />
                    <FaCcPaypal />
                    <FaStripe />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
