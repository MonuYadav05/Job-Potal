import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authApi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    accountType: "Employer",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setFormData({
      ...formData,
      accountType:
        formData.accountType === "Employer" ? "Employee" : "Employer",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(login(formData, navigate));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center mt-5 justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md space-y-4"
        style={{ borderColor: "#3575e2" }}
      >
        <h2
          className="text-2xl font-semibold text-center"
          style={{ color: "#3575e2" }}
        >
          Login
        </h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 w-full border rounded focus:outline-none focus:ring-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="p-2 w-full border rounded focus:outline-none focus:ring-2"
        />

        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-700">Account Type</label>
          <div
            className={`w-60 h-10 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
              formData.accountType === "Employer"
                ? "justify-start"
                : "justify-end"
            }`}
            onClick={handleToggle}
          >
            <div className="w-1/2 text-center text-white bg-[#3575e2] rounded-full py-1">
              {formData.accountType}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#3575e2] text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-center">
          New to JobPortal{"  "}
          <Link
            className="text-[#3575e2] font-semibold hover:underline"
            to={"/sign-up"}
          >
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
