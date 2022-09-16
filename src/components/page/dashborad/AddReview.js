import React, { useEffect } from "react";
import { toast } from "react-toastify";
import underline from "../../../assets/underline.png";
import review from "../../../assets/review.jpg";
const AddReview = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const message = event.target.message.value.slice(0, 100);
    const ratting = event.target.ratting.value;
    const name = event.target.name.value;
    const data = { name, img, message, ratting };

    event.target.reset();

    fetch("https://secret-brook-35937.herokuapp.com/review", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    toast.success("Review Added");
  };

  return (
    <div>
      <div className="my-8">
        <h1 className="text-2xl text-center">
          Your feedback and reviews important us
        </h1>
        <img src={underline} className="block mx-auto mt-3" alt="" />
      </div>

      <div className="grid lg:grid-cols-2 ">
        <div>
          <img src={review} className="w-full h-full" alt="" />
        </div>
        <div class="hero h-[500px] ">
          <div class="  w-full max-w-sm shadow-2xl ">
            <div class="card-body">
              <form onSubmit={handleReview}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  class="input input-bordered w-full max-w-xs my-3"
                  required
                />
                <input
                  type="text"
                  name="img"
                  placeholder="image url"
                  class="input input-bordered w-full max-w-xs"
                  required
                />
                <textarea
                  name="message"
                  class="textarea textarea-bordered   w-full max-w-xs mt-5"
                  placeholder="message"
                  required
                ></textarea>
                <input
                  type="number"
                  name="ratting"
                  placeholder="Add Ratting"
                  class="input input-bordered w-full max-w-xs my-3"
                  required
                />
                <input
                  type="submit"
                  value="Add Review"
                  className="btn btn-success mt-5"
                  required
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
