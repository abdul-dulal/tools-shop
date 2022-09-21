import React from "react";
import { AiFillDelete } from "react-icons/ai";
const OrderRow = ({ order, index }) => {
  const { pName, user } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user}</td>
      <td>{pName}</td>

      <td></td>
      <td>
        <AiFillDelete className="text-xl font-bold" />
      </td>
    </tr>
  );
};

export default OrderRow;
