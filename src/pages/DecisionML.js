import React, { useState } from "react";
import axios from "axios";
import {BallTriangle} from "react-loader-spinner";
import DecisionTreeDrugs from "../assets/images/decionTreeDrugs.png";
import { NextButton } from "../components/NextButton";
import { PreviousButton } from "../components/PreviousButton";

const DecisionML = () => {
  const [formData, setFormData] = useState({
    age: "",
    na_to_k: "",
    sex: "Male", // Default value
    bp: "Low", // Default value
    cholesterol: "Normal", // Default value
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call the prediction API
      const response = await axios.post(
        "https://drugsprediction-3.onrender.com/predict",
        formData
      );
      setPrediction(response.data.prediction);
      setLoading(false);
      console.log(prediction);
      setError(null);
    } catch (err) {
      setError("Error making prediction. Please try again.");
      setPrediction(null);
    }
  };

  return (
    <div className="dark:text-white md:mx-8 mt-16 md:mt-4 font-sans">
      <h1 className="text-center text-2xl shadow-md p-4 text-blue-400 rounded-md">
        Decision Tree In AI
      </h1>
      <div className="md:m-16 m-6 text-center text-[18px]">
        <p>
          Now we will see how AI can use decision tree to make predictions from
          previous data
        </p>
      </div>

      <div className="md:mt-16 mt-8">
        <div className="shadow-md bg-white md:w-[50%] w-[95%] mx-auto md:mx-0 p-4 rounded-md">
          <h2 className="text-[20px] mb-4">AI uses decision trees to:</h2>
          <div className="flex justify-between">
            <ol className="list-decimal flex flex-col gap-4 ml-4">
              <li>Solve problems step by step.</li>
              <li>Make predictions (e.g., Will it rain today?).</li>
              <li>
                Categorize things (e.g., Is this fruit an apple or an orange?).
              </li>
            </ol>
          </div>
        </div>

        <div className="md:mt-12 mt-8">
          <p className="md:w-[60%] mb-6 px-4 md:px-1">
            So, Now we are going to predict the drug type to be prescribed based
            on Inputs, here we have used decision tree classifier to predict the
            correct Drug type based on your Inputs
          </p>
          <div className="px-4 md:px-1">
            <p className="text-xl mb-4">How It Works</p>
            <ol className="list-decimal flex flex-col gap-4 ml-4">
              <li>
                Enter the required details about the condition or parameters
                (e.g., age, blood pressure, cholesterol levels).
              </li>
              <li>
                Intelligent model processes your data and predicts the best-fit
                drug category in seconds.
              </li>
            </ol>
          </div>
          <p className="mt-8 text-[20px]">Let's Try Now....</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-8 my-8 shadow-lg bg-white py-16 px-8 rounded-md"
          >
            <div className="md:w-[30%] w-[100%] flex gap-2 items-center text-center">
              <label className="w-[40%]">Age:</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="Enter age"
                className="h-10 p-2 border border-blue-400 rounded-md"
              />
            </div>
            <div className="md:w-[30%] w-[100%] flex gap-2 items-center text-center">
              <label className="w-[40%] md:w-auto">Na_to_K:</label>
              <input
                type="text"
                name="na_to_k"
                value={formData.na_to_k}
                onChange={handleChange}
                required
                placeholder="Enter Na to K ratio"
                className="h-10 p-2 border border-blue-400 rounded-md"
              />
            </div>
            <div className="md:w-[30%] w-[100%] flex gap-2 items-center text-center">
              <label className="w-[30%] md:w-auto">Sex:</label>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="h-10 p-2 border border-blue-400 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="md:w-[30%] w-[100%] flex gap-2 items-center text-center">
              <label className="w-[30%] md:w-auto md:ml-12">BP:</label>
              <select
                name="bp"
                value={formData.bp}
                onChange={handleChange}
                className="h-10 p-2 border border-blue-400 rounded-md"
              >
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="md:w-[30%] w-[100%] flex gap-2 items-center text-center">
              <label className="w-[30%] md:w-auto">Cholesterol:</label>
              <select
                name="cholesterol"
                value={formData.cholesterol}
                onChange={handleChange}
                className="h-10 p-2 border border-blue-400 rounded-md"
              >
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-400 px-8 rounded-3xl text-white text-[20px] hover:bg-blue-500"
            >
              Predict
            </button>
            <div className="w-[100%] flex justify-center items-center text-center mt-4">
              {loading ? (
                <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
              ) : prediction ? (
                <p className="text-[20px] text-black font-bold">
                  Predicted Drug Type: {prediction}
                </p>
              ) : (
                error && <p style={{ color: "red" }}>{error}</p>
              )}
            </div>
          </form>
        </div>
        <div>
          <p className="text-center mb-6 text-[20px]">
            The decision tree for above model will look like below image.
          </p>
          <img
            src={DecisionTreeDrugs}
            alt=""
            className="md:h-[800px] h-[400px] flex items-center m-auto"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <PreviousButton path={"/terminologies"} />
        <NextButton path={"/usefullness"} />
      </div>
    </div>
  );
};

export default DecisionML;
