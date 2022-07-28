import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import InfoInput from "./Components/InfoInput";

function App() {
  const [infoDetails, setInfoDetails] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    data._id = Math.floor(Math.random() * 100);
    const newInfo = [...infoDetails, data];
    setInfoDetails(newInfo);
    localStorage.setItem("infoDetails", JSON.stringify(newInfo));
    // const storedInfoDetails = JSON.parse(localStorage.getItem("infoDetails"));
    // // console.log(...storedInfoDetails);
    // // console.log(newInfo);
    // const newStoredInfoDetails = [...storedInfoDetails, ...newInfo];
    // localStorage.setItem("infoDetails", JSON.stringify(newStoredInfoDetails));
    reset();
  };

  const InputReset = () => {
    reset();
  };
  // const storedInfoDetails = JSON.parse(localStorage.getItem("infoDetails"));
  // console.log(storedInfoDetails);
  return (
    <div className="App bg-gray-100 p-5 min-h-screen">
      <InfoInput
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        InputReset={InputReset}
      />
    </div>
  );
}

export default App;
