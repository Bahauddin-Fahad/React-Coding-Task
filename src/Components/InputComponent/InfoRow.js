import React from "react";

const InfoRow = ({ infoDetail, index }) => {
  const { _id, date, amount, paymentMode, remark } = infoDetail;
  return (
    <tr className="text-sm font-bold">
      <th>{index + 1}</th>
      <td>{_id}</td>
      <td>{date}</td>
      <td>{amount}</td>
      <td>{paymentMode}</td>
      <td>{remark}</td>
    </tr>
  );
};

export default InfoRow;
