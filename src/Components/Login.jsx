import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Please Enter All Details");
    } else {
      const getDetails = JSON.parse(localStorage.getItem("user")) || [];
      const user = getDetails.find((curValue) => curValue.email === email && curValue.password === password);
      if (user) {
        alert("Login Successfully");
        navigate("/home");
      } else {
        setMsg("Incorrect Email Or Password");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Login</h2>
        {msg && <p className="text-red-500 mb-4">{msg}</p>}
        <div className="mb-4">
          <input
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
