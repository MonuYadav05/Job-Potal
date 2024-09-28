import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSignupData } from "../redux/features/authSlice";
import { sendOtp } from "../services/operations/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "Employer",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountTypeToggle = () => {
    setFormData({
      ...formData,
      accountType:
        formData.accountType === "Employer" ? "Employee" : "Employer",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    const signUpData = { ...formData };
    console.log(signUpData.email);

    dispatch(setSignupData(signUpData));
    dispatch(sendOtp(signUpData.email, navigate));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      accountType: "Employer",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen mt-5 bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3575e2]">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3575e2]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3575e2]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3575e2]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3575e2]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3575e2]"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="text-gray-700">Account Type</label>
            <div
              className={`w-60 h-10 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
                formData.accountType === "Employer"
                  ? "justify-start"
                  : "justify-end"
              }`}
              onClick={handleAccountTypeToggle}
            >
              <div className="w-1/2 text-center text-white bg-[#3575e2] rounded-full py-1">
                {formData.accountType}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3575e2] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already SignedUp {"  "}
            <Link
              className="text-[#3575e2] font-semibold hover:underline"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
