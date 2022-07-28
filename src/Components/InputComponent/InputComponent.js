import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import InfoInput from "./InfoInput";
import InfoTable from "./InfoTable";
const InputComponent = () => {
  // Getting The InputDetails From Storage
  const getStoredItems = () => {
    let storedInfo = localStorage.getItem("infoDetails");
    if (storedInfo) {
      return JSON.parse(localStorage.getItem("infoDetails"));
    } else {
      return [];
    }
  };

  // Storing The Input Details in State
  const [infoDetails, setInfoDetails] = useState(getStoredItems());

  // Using React Hook Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    data._id = Math.floor(Math.random() * 1000000);
    const newInfo = [...infoDetails, data];
    setInfoDetails(newInfo);
    localStorage.setItem("infoDetails", JSON.stringify(newInfo));
    reset();
  };

  const InputReset = () => {
    reset();
  };

  const storedInfoDetails = JSON.parse(localStorage.getItem("infoDetails"));
  // console.log(storedInfoDetails);
  return (
    <div className=" bg-gray-100 p-5 min-h-screen">
      <InfoInput
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        InputReset={InputReset}
      />
      <InfoTable storedInfoDetails={storedInfoDetails} />
    </div>
  );
};

export default InputComponent;
