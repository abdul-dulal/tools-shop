import React from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Order = ({ order, index, refetch, isLoading }) => {
  const { pName, quantity, price, _id, transactionId } = order;
  const navigate = useNavigate();
  const cancelOrder = (id) => {
    fetch(`http://localhost:3000/order/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Item Delete Successfully");
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{pName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {transactionId ? (
          <div>
            <button className="btn px-8 ">paid</button>
          </div>
        ) : (
          <button
            class="btn btn-xs"
            onClick={() => navigate(`/dashboard/payment/${_id}`)}
          >
            Pay Now
          </button>
        )}
      </td>
      <td>
        {transactionId ? (
          <div className="text-[16px] font-bold">
            <p>TransactionId</p>
            <p> {transactionId}</p>
          </div>
        ) : (
          <button
            class="btn btn-sm  bg-red-800"
            onClick={() => cancelOrder(_id)}
          >
            Cancel Order
          </button>
        )}
      </td>
    </tr>
  );
};

export default Order;
