import React from "react";
import { toast } from "react-toastify";
import addProduct from "../../../assets/add.jpg";
const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.img.value;
    const description = event.target.message.value.slice(0, 100);
    const quantity = event.target.quantity.value;
    const miniumqnt = event.target.minquantity.value;
    const price = event.target.price.value;
    const data = { name, img, description, quantity, miniumqnt, price };
    console.log(data);

    fetch("http://localhost:3000/product/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((data) => {
        console.log(data);
        toast.success("Successfully product Added");
        event.target.reset();
      });
  };
  return (
    <div className="bg-[#FFF5ED] mb-10">
      <div className="grid lg:grid-cols-2">
        <div className="mt-10">
          <img src={addProduct} className="w-full h-full" alt="" />
        </div>
        <div class="hero h-[700px] ">
          <div class="  w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 className="text-center text-2xl font-bold">
                Add <span className="text-orange-300">Your Best Product </span>
              </h1>
              <form onSubmit={handleAddProduct}>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
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
                  placeholder="Description"
                  required
                ></textarea>
                <input
                  type="number"
                  name="quantity"
                  placeholder=" Available Quantity"
                  class="input input-bordered w-full max-w-xs my-3"
                  required
                />
                <input
                  type="number"
                  name="minquantity"
                  placeholder=" Min Order Quantity"
                  class="input input-bordered w-full max-w-xs my-3"
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  class="input input-bordered w-full max-w-xs my-3"
                  required
                />
                <input
                  type="submit"
                  value="Add Review"
                  className="w-32 h-12 text-white rounded bg-primary mt-5 cursor-pointer"
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

export default AddProduct;
