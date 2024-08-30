import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import irregular from "../../assets/irregular.png"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowpassword] = useState(false)
    
    const togglevisibility = () => {
        setShowpassword(!showPassword)
    }

    return (
        <div>
            <div className=" flex">
                <div>
                    <img src={irregular} alt="irregularshape" className="h-lvh" />
                </div>
                <div>
                <div className="flex justify-center mt-40">
                    <p className="font-poppins text-48 font-black">Welcome Back,</p>
                </div>
            
                <div className="flex flex-col  ml-48 mt-10">
                    <div> 
                        <label className="block font-epilogue font-semibold  mb-3">Email Address</label>
                        <input
                            className=" w-96 p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500"
                            type="text"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div >
                        <label className="block font-epilogue font-semibold mb-3 mt-3">Password</label>
                        <div  className="relative">
                        <input
                            className="p-2 pl-2 border rounded-lg w-96"
                            type={showPassword ? "text":"password"}
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
                    <div className="flex mt-3">
                        <p className="text-gray-500">Don't have an account?</p>
                        <Link to="/signup" className="text-customColor-0">Sign Up</Link>
                        </div> 
                        
                </div>
                <div className=" ml-80 m-9"> 
                    <button className="bg-customColor-0  w-32 p-1 rounded-lg text-white font-langar text-28">
                        Login 
                    </button>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Login;
