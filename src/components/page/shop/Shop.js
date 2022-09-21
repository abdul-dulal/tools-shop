import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://tools-shop.onrender.com/product/allProduct")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-6 container my-14">
      {products.map((product) => (
        <div>
          <div className="bg-white shadow-lg py-5">
            <img src={product.img} className="w-64" alt="" />
            <p className="text-xl px-4">{product.pName.slice(0, 22)}</p>
            <div className="grid grid-cols-2  mt-6 px-4">
              <div>
                <h1> Price :{product.price}</h1>
              </div>
              <div>
                <h1>Cate: {product.category}</h1>
              </div>
              <div>
                <h1> Qauntity :{product.quantity}</h1>
              </div>
              <div>
                <h1> MinQauntity{product.minQuantity}</h1>
              </div>
            </div>
            <div className="px-4">
              <button
                onClick={() => navigate(`/purchase/${product._id}`)}
                className="text-white rounded w-32 h-12 bg-primary mt-3 p"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
