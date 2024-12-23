import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link ,useNavigate} from "react-router-dom";
import pic from "../../assets/search.png"
import hat from "../../assets/graduate.png"
import axios from "axios"
import { base_url } from "../../services/apiEnd";

const Signup = () => {
    // const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("")
    const[email,setEmail]=useState("")
    const [collegename,setCollegname]=useState("")
    const [password, setPassword] = useState("");
    const[confirmedpassword,setConfirmedPassword]=useState()
    const [showPassword, setShowpassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const togglevisibility = () => {
        setShowpassword(!showPassword)
    }

    const handleSignup = async () => {
        if (password !== confirmedpassword) {
            setErrorMessage("Passwords do not match.");
            return;
          
           
        }

        try {
            const response = await axios.post(`${base_url}/signup`, {
                FirstName: firstname,
                LastName: lastname,
                Email:email,
                College: collegename,
                Password: password,
            });

            console.log("Signup successful:", response.data);
            navigate('/login'); 
        } catch (error) {

         
            console.error("Signup error:", error);
        }
    };

    return (
        
            <div className="flex flex-col  justify-center w-screen items-center">
            <div className=" flex justify-center gap-4 ">
                    <img src={hat} alt="graduate hat " className="w-16 -rotate-45" />
                <p className="font-poppins text-30 font-semibold pt-3"> Join Us Today!</p>
                </div>
                <div className=" flex justify-center gap-2 py-2 w-[31%] border rounded-lg focus:outline-none focus:border-gray-500 mb-3">
                    <img src={pic} alt="google logo " className="w-6"  />
                    <p className="text-customColor-2 font-bold "> Sign up with Google </p>
                </div>
                <div className="flex items-center w-[31%] mb-2">
                  <div className="flex-grow border-t border-gray-300"></div>
                   <span className="px-4 text-gray-700">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                <div className="w-[31%]">
                    <div className="flex w-full gap-3">
                    <div className="w-full"> 
                        <label className="block  text-customColor-1 text-[11pt] font-medium
                          ">First Name</label>
                        <input
                            className=" w-[11rem] p-2 pl-2 placeholder:text-[11pt] border rounded-lg focus:outline-none focus:border-gray-500 mb-3"
                            type="text"
                            placeholder="Enter your first name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="w-full" > 
                        <label className="block   text-customColor-1  text-[11pt] font-medium">Last Name</label>
                        <input
                            className="  p-2 pl-2 placeholder:text-[11pt] border rounded-lg focus:outline-none focus:border-gray-500 mb-3"
                            type="text"
                            placeholder="Enter your last name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    </div>
                    
                
                    <div className="w-full"> 
                        <label className="block   text-customColor-1  text-[11pt] font-medium">Email Address</label>
                        <input
                            className=" placeholder:text-[11pt] w-full  p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500"
                            type="text"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                      <div className="w-full"> 
                        <label className="block   text-[11pt]  text-customColor-1 font-medium mt-3">College</label>
                        <input
                            className=" w-full placeholder:text-[11pt] p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500 mb-3 "
                            type="text"
                            placeholder="Enter your college name"
                            value={collegename}
                            onChange={(e) => setCollegname(e.target.value)}
                        />
                    </div>
                     <div className="w-full">
                        <label className="block   text-[11pt] text-customColor-1 font-medium">Password</label>
                        <div  className="relative">
                        <input
                            className="p-2 w-full placeholder:text-[11pt] pl-2 border rounded-lg mb-3" 
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
                     <div className="w-full" >
                        <label className="block   text-[11pt]  text-customColor-1 font-medium "> Confirm Password</label>
                        <div  className="relative">
                        <input
                            className="p-2 w-full pl-2 border rounded-lg w-96"
                            type={showPassword ? "text":"password"}
                            placeholder="Enter password"
                            value={confirmedpassword}
                             onChange={(e) => setConfirmedPassword(e.target.value)}
                        />
                          <button
                             type="button"
                              className="absolute top-3 -translate-x-7 text-gray-500"
                              onClick={togglevisibility}
            >
                                 {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                            </button>
                        </div>
                        <div>
                            {errorMessage && (
                                   <p className="text-red-500 font-bold mb-3">{errorMessage}</p>
                            )}
                        </div>
                        
                    </div>
                        <div className="flex justify-center mt-5"> 
                        <button className="bg-customColor-0 w-full py-1  border  rounded-lg text-white text-28"
                        onClick={handleSignup}>
                        Continue
                    </button>
                    </div>
                      <div className="flex gap-2 mt-3">
                        <p className="text-gray-500">Already have an account?</p>
                        <Link to="/login" className="text-customColor-0">Login</Link>
                    </div>
                    

                </div>
                </div>
       
    );
}

export default Signup;
