import React from "react";
import InfoRow from "./InfoRow";

const InfoTable = ({ storedInfoDetails }) => {
  return (
    <div className="w-full mt-10">
      <h1 className="underline font-bold text-2xl pb-2">Info Table</h1>
      <div className="overflow-x-auto w-full max-w-3xl mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Reciept ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {storedInfoDetails?.map((infoDetail, index) => (
              <InfoRow
                key={storedInfoDetails._id}
                infoDetail={infoDetail}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoTable;
