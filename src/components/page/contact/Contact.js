import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(event.target.subject.value);

    emailjs
      .sendForm(
        "service_bwqmbrj",
        "template_hrs9njg",
        form.current,
        "H3228sqp0_i-c7TfW"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            toast.success("Thank For Messaging👍❤️");
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.subject.value = "";
            event.target.message.value = "";
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" ">
      <div className="  bg-gray-200 contact-form flex  gap-4 justify-center h-screen  lg:px-24 items-center py-7">
        <div className=" px-10 ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="lg:flex gap-5">
              <div>
                <label className="uppercase font-semibold  block"> name</label>
                <input
                  type="text"
                  name="to_name"
                  id="name"
                  className=" lg:w-[293px] md:w-8/12 px-2 shadow-lg roundedv  py-4 my-3 placeholder:ml-0 "
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label className="uppercase font-semibold  block">e-mail</label>
                <input
                  type="email"
                  email="from_name"
                  id="email"
                  className=" lg:w-[293px] md:w-8/12   px-2 shadow-lg roundedv  py-4 my-3 placeholder:ml-0 "
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <input
              type="text"
              subject="subject"
              id="subject"
              required
              placeholder="Subject"
              className=" lg:w-11/12 md:w-8/12 sm: px-2  py-4 my-2 shadow rounded"
            />
            <textarea
              message="message"
              id="message"
              className="  lg:w-11/12 md:w-8/12 px-2 py-5 shadow rounded my-3"
              placeholder="Message"
              required
            />
            <br />
            <input
              type="submit"
              value="Send Message"
              className="px-5 py-3 bg-primary rounded cursor-pointer text-white font-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
