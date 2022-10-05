import React, { useEffect, useState } from "react";
import Loading from "../../shere/Loading";
import OrderRow from "./OrderRow";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://tools-shop-backend.onrender.com/order/manage_order")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="mt-5 px-8">
      {loading ? (
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Product</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <OrderRow key={order._id} order={order} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ManageOrders;
