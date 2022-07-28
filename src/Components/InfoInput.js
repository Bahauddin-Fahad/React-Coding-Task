import React from "react";
const InfoInput = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  InputReset,
}) => {
  return (
    <div className="mb-5">
      <h2 className="underline font-bold text-2xl"> Reciept Details</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md mx-auto"
      >
        <div className="form-control mt-3 w-full">
          <label className="input-group">
            <span className="w-36">Date</span>
            <input
              type="text"
              placeholder="Enter Date"
              className="input input-bordered w-full"
              {...register("date", { required: true, maxLength: 20 })}
            />
          </label>
          <p className="font-semibold text-sm text-error text-start">
            {errors.date?.type === "required" && "Date is required"}
          </p>
        </div>
        <div className="form-control mt-3 w-full">
          <label className="input-group">
            <span className="w-36">Amount</span>
            <input
              type="text"
              placeholder="Enter Amount ( in INR )"
              className="input input-bordered w-full"
              {...register("amount", { required: true, maxLength: 20 })}
            />
          </label>
          <p className="font-semibold text-sm text-error text-start">
            {errors.amount?.type === "required" &&
              "Amount of Money is required"}{" "}
          </p>
        </div>
        <div className="form-control mt-3 w-full">
          <label className="input-group w-full">
            <span className="w-48">Payment</span>
            <select
              className="select select-secondary w-9/12"
              {...register("paymentMode", { required: true })}
            >
              <option defaultValue="Cash" className="w-full">
                Cash
              </option>
              <option>Credit Card</option>
              <option>Visa Card</option>
              <option>Master Card</option>
            </select>
          </label>
        </div>
        <div className="form-control mt-3 w-full">
          <label className="input-group w-full">
            <span className="w-36">Remark</span>
            <input
              type="text"
              placeholder="Remark"
              className="input input-bordered w-full"
              {...register("remark", { required: true, maxLength: 20 })}
            />
          </label>
          <p className="font-semibold text-sm text-error text-start">
            {errors.remark?.type === "required" && "Remark is required"}
            {errors.remark?.type === "maxLength" && "Maximum 20 Characters"}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button
            className="btn btn-outline btn-error"
            onClick={() => InputReset()}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoInput;
