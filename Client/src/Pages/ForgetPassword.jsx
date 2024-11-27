import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword } from "../services/operations/authApi";
import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(forgetPassword(email, navigate));
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center mt-5 justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 flex w-[30%] h-60 flex-col rounded-md shadow-md space-y-4"
        style={{ borderColor: "#3575e2" }}
      >
        <h1 className="mx-auto text-2xl font-bold  ">Forget Password</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 w-full border rounded focus:outline-none focus:ring-2"
        />

        <button
          type="submit"
          className="w-full bg-[#3575e2] text-white p-2 rounded-md hover:bg-blue-600"
        >
          Reset
        </button>
        <p className="text-center">
          <Link
            className="text-[#3575e2] font-semibold hover:underline"
            to={"/login"}
          >
            click here for login ?{"  "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;
