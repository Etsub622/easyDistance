import logo from "../assets/easyDlogo.png"
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div className="bg-customColor1-3 p-3 pl-4  ">
            <div className="flex justify-between m-7">
                <div>
                    <div className="flex gap-2">
                        <img src={logo} alt="logo" className="w-12" />
                        <h1 className="font-langar text-white text-30">Easy Distance</h1>
                    </div>
                    <div className="mt-4">
                        <p className="font-langar text-white text-28">
                            Learning made simple and accessible. With Easy<br/>
                            Distance, you can pursue education from<br/>
                            anywhere, on your own schedule, with user-<br/>
                            friendly resources that fit seamlessly into your
                            life
                        </p>
                    </div>
                    <div className="flex gap-7 text-28 mt-4">
                        <TfiEmail className="text-white" />
                        <FaLinkedin className="text-white" />
                    </div>
                    <div>

                    </div>
                </div>
                <div className=" flex flex-col gap-6 text-28 ">
                    <div className="flex gap-3">
                        <div className="font-langar  text-white ">
                            <h6>Courses</h6>
                            <ul  className="list-disc list-inside">
                              <li>Economics</li>
                              <li>Computer Science</li>
                              <li>Management</li>
                             </ul> 
                        </div>
                        <div className="font-langar text-white ">
                            <h6>Colleges</h6>
                            <ul  className="list-disc list-inside">
                              <li> Unity</li>
                              <li>St.Mary</li>
                              <li>RiftValley</li>
                             </ul> 
                        </div>
                         
                    </div>
                     <div className="font-langar text-white ">
                            <h6>Departments</h6>
                            <ul  className="list-disc list-inside">
                              <li>Economics</li>
                              <li>Computer Science</li>
                              <li>Management</li>
                             </ul> 
                        </div>
                    
                </div>
                <div >
                    <h2 className="text-white font-langar mb-4"> Leave a comment</h2>
                    <form action="">
                        <input type="text"
                            placeholder="Your email address"
                            className=" text-black font-langar bg-white w-96 rounded-lg p-2 mb-4 "
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <textarea
                            className="block w-96 h-40 rounded-xl p-2 font-langar mb-4"
                            placeholder="write your message here "
                            onChange={(e)=>setMessage(e.target.value)}
                        /> 
                        <button className="bg-white p-1 rounded-lg font-langar w-12 ">send</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Footer;