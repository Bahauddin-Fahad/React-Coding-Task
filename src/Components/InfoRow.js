import React from "react";

const InfoRow = ({ infoDetail, index }) => {
  const { _id, date, amount, paymentMode, remark } = infoDetail;
  return (
    <tr>
      <th>{index + 1}</th>
      <td className="font-bold">{_id}</td>
      <td className="font-bold">{date}</td>
      <td className="font-bold">{amount}</td>
      <td className="font-bold">{paymentMode}</td>
      <td className="font-bold">{remark}</td>
    </tr>
  );
};

export default InfoRow;
