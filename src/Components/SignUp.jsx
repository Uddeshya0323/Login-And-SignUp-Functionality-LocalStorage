import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const userDetail = {
    name: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [data, setData] = useState(userDetail);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name === "" || data.email === "" || data.password === "") {
      alert("Please fill all the fields.");
    } else {
      const storedData = JSON.parse(localStorage.getItem("user") || "[]");
      storedData.push(data);
      localStorage.setItem("user", JSON.stringify(storedData));
      setData(userDetail); // Clear form fields after submission
      alert("Sign Up Successfully");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Sign Up</h2>
        <div className="mb-4">
          <input
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            placeholder="Username"
            value={data.name}
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
