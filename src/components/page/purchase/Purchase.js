import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratting from "../../shere/Ratting";
import Addition from "./Addition";
import Description from "./Description";
import Reviews from "./Reviews";
import auth from "../../../Firebaseinit";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Purchase = () => {
  const [purchase, setPurchase] = useState();
  const [isActive, setIsActive] = useState("description");
  const [quantity, setQuantity] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  console.log(id);
  const [user] = useAuthState(auth);
  let errElement = "";
  useEffect(() => {
    axios
      .get(`https://tools-shop-backend.onrender.com/product/purchase/${id}`)
      .then((res) => {
        setLoading(true);
        return setPurchase(res.data);
      });
  }, []);
  const handleOrder = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "https://tools-shop-backend.onrender.com/order/myorder",
      {
        pName: purchase?.pName,
        price: purchase?.price * quantity,
        user: user?.email,
        quantity: quantity,
      }
    );
    if (data.message === "Success") {
      toast("Order Placed successfully");
    }
  };
  if (quantity > purchase?.quantity) {
    errElement = <p> {` quantity is less than ${purchase?.quantity}`}</p>;
  } else if (quantity <= purchase?.minQuantity) {
    errElement = (
      <p> {` quantity is should getter  than ${purchase?.minQuantity}`}</p>
    );
  }
  return (
    <div className="container my-8">
      {loading ? (
        <>
          <div className=" grid lg:grid-cols-2 md:grid-cols-2 items-center">
            <div>
              <img
                src={purchase.img}
                className="flex items-center w-[470px]"
                alt=""
              />
            </div>
            <div className="flex justify-items-center items-center">
              <div>
                <h1 className="text-3xl font-serif ">{purchase.pName}</h1>
                <div className="flex">
                  <p>
                    <Ratting />
                  </p>
                  <span className="mt-1 ml-2">3 reviews</span>
                </div>
                <p className="text-xl text-primary">
                  Price : $ {purchase.price}
                </p>
                <p className="mt-2 text-gray-600">
                  Santiago travels from his homeland in Spain to the Egyptian
                  desert in search of a treasure buried near the Pyramids. Lorem
                  ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                  incididunt ut labore et. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elitet.
                </p>
                <div className="mt-5">
                  <form onSubmit={handleOrder}>
                    <input
                      type="text"
                      value={user?.email}
                      class="input input-bordered w-full max-w-xs block"
                    />
                    <input
                      type="text"
                      value={purchase.pName}
                      class="input input-bordered w-full max-w-xs  block mt-4"
                    />
                    <input
                      type="text"
                      placeholder={`Minium order qunantity ${purchase.minQuantity}`}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                      class="input input-bordered w-full max-w-xs  block mt-4 "
                    />
                    <p className="text-[16px] text-red-700">{errElement}</p>
                    <input
                      type="text"
                      required
                      placeholder="Phone number"
                      class="input input-bordered w-full max-w-xs  block mt-4 "
                    />
                    <input
                      type="text"
                      required
                      placeholder="Address "
                      class="input input-bordered w-full max-w-xs  block mt-4 "
                    />
                    <p className="mt-3">
                      Avaiiable Qauntity : {purchase.quantity}
                    </p>
                    <input
                      type="submit"
                      value="Placed Order"
                      className={`w-32 h-12 rounded bg-primary text-white mt-5 cursor-pointer ${
                        quantity > purchase.quantity ? "cursor-not-allowed" : ""
                      }`}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-10 text-xl font-blod mt-10">
            <button
              onClick={() => setIsActive("description")}
              className={`${
                isActive === "description"
                  ? "border-b-4 border-primary"
                  : "to-black"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setIsActive("additional")}
              className={`${
                isActive === "additional"
                  ? "border-b-4 border-primary duration-1000"
                  : "to-black"
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setIsActive("reviews")}
              className={`${
                isActive === "reviews"
                  ? "border-b-4 border-primary"
                  : "to-black"
              }`}
            >
              Rviews
            </button>
          </div>
        </>
      ) : (
        <loading />
      )}
      {isActive === "description" && <Description />}
      {isActive === "additional" && <Addition />}
      {isActive === "reviews" && <Reviews />}
    </div>
  );
};

export default Purchase;
