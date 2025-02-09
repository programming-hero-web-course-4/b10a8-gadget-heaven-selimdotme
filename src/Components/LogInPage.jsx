import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "./AuthProvider";

const RegisterPage = () => {

  const {userRejister} = useContext(AuthContext)




  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email, password, "email and password ");
    


    userRejister(email, password)
    .then((result) => {
       console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });


  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <h2 className="text-center text-2xl font-semibold text-[#9538E2] mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
          
            name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
          
            name="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9538E2]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 btn btn-primary"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
