import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { signupData, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/sign-up");
    }
    console.log(signupData);
  }, []);
  const handleChange = (otpValue) => {
    setOtp(otpValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    const data = { ...signupData };
  };

  return (
    <div className="flex justify-center items-center h-screen mt-5 bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-[#3575e2] text-center mb-6">
          Enter OTP
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <OtpInput
            value={otp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            onChange={handleChange}
            isInputNum={true}
            inputStyle={{
              width: "3rem",
              height: "3rem",
              margin: "0 0.5rem",
              fontSize: "1.5rem",
              borderRadius: "4px",
              border: "1px solid #d3d3d3",
              backgroundColor: "white",
              color: "#3575e2",
              outline: "none",
            }}
            focusStyle={{
              border: "1px solid #3575e2",
            }}
          />

          <button
            type="submit"
            className="mt-6 bg-[#3575e2] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
