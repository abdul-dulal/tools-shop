import React from "react";

const OrderRow = ({ order, index }) => {
  console.log(order);
  const { prodcutNmae, email } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{prodcutNmae}</td>
      <td></td>
    </tr>
  );
};

export default OrderRow;
