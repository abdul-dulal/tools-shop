import React, { useEffect, useState } from "react";
import OrderRow from "./OrderRow";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://secret-brook-35937.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow key={order._id} order={order} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
