/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import irregular from "../../assets/irregular.png";
import axios from "axios";
import { base_url } from "../../services/apiEnd";
import logo from "../../assets/easyDlogo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  const togglevisibility = () => {
    setShowpassword(!showPassword);
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${base_url}/login`, {
        Email: email,
        Password: password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);
      if (token) {
        navigate("/");
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className=" flex h-screen w-screen  ">
      <div className="w-[30%]">
        <img src={irregular} alt="irregularshape" className="h-lvh" />
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex font-poppins text-36 font-semibold ">
          <p className="">Welcome to </p>
          <img src={logo} alt="logo" className="w-16" />
          <p className="text-customColor-0  "> Easy Distance</p>
        </div>
        <div className="flex flex-col text-gray-800 mt-10 w-full">
          <div>
            <label className="block font-poppins text-[11pt] mb-3">
              Email Address
            </label>
            <input
              className=" w-full p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500"
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-poppins mb-3 text-[11pt] mt-3">
              Password
            </label>
            <div className="relative">
              <input
                className="p-2 pl-2 border rounded-lg w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-3 -translate-x-7 text-gray-500"
                onClick={togglevisibility}
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </button>
            </div>
          </div>
          <div className="flex mt-3 self-end gap-1">
            <Link to="/" className="text-gray-500">
               Forgot password?
            </Link>
          </div>
    
        </div>
        <div className="mt-6 w-full">
          <button
            className="bg-customColor-0 px-7 w-full py-1 rounded-lg text-white  text-28"
            onClick={handleLogin}
          >
            Login
          </button>
          
        </div>
        <div className="flex mt-3  gap-1">
            <p className="text-gray-500">Don't have an account?</p>
            <Link to="/signup" className="text-customColor-0">
               Sign Up
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Login;
