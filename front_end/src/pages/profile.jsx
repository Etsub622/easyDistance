import React from 'react'
import { useState } from 'react';
import contact from "../assets/contact.png"
import Uniheader from '../componenets/common_com/Header';

const profile = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [collegename, setCollegname] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
 
  return (
      <>
          
            <Uniheader/>
          <div className='flex justify-center mt-7'>
              <div className=' flex flex-col'>
              <div className='flex gap-3  pb-8' >
                  <img src={contact} alt="contact"  className='w-12 '/>
                    <div>
                      <p className='font-epilogue text-28 font-bold'>Hello User ,</p>
                      <p>user@gmail.com</p>
                      </div>
                   </div>
                
              <div>
                  <div>
                       <div> 
                        <label className="block font-epilogue text-customColor-1 font-medium
                          ">First Name</label>
                        <input
                            className=" w-96 p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500 mb-3"
                            type="text"
                            placeholder=" yonas"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                      </div>
                       <div> 
                        <label className="block font-epilogue text-customColor-1 font-medium
                          ">
                            Last Name</label>
                        <input
                            className=" w-96 p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500 mb-3"
                            type="text"
                            placeholder="Alemu"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                      </div>
                       <div> 
                        <label className="block font-epilogue text-customColor-1 font-medium
                          ">Email</label>
                        <input
                            className=" w-96 p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500 mb-3"
                            type="text"
                            placeholder="yonas@gmail.com "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>
                       <div> 
                        <label className="block font-epilogue text-customColor-1 font-medium
                          ">Collage</label>
                        <input
                            className=" w-96 p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500 mb-3"
                            type="text"
                            placeholder=" Unity University"
                            value={collegename}
                            onChange={(e) => setCollegname(e.target.value)}
                          />
                      </div>
                       <div> 
                        <label className="block font-epilogue text-customColor-1 font-medium
                          ">Department</label>
                        <input
                            className=" w-96 p-2 pl-2 border rounded-lg focus:outline-none focus:border-gray-500 mb-3"
                            type="text"
                            placeholder="Economics"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                          />
                      </div>

                      
                  </div>
                        <div className=' flex justify-between'>
                            <p
                          className=" font-bold bg-customColor-2 text-white mt-3 p-2  flex justify-center w-max rounded-lg">
                          Save Changes 
                      </p>
                      <p className=' border border-red-400 rounded-md  text-cardBackground-1 text-center font-semibold  mt-3 p-2  '>
                          Cancel Change 
                      </p>
                        </div>
                  
                  </div>
                     </div>
              
          </div>
      </>
  )
}

export default profile