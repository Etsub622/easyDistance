import React from "react";
import { Link } from "react-router-dom";


const HeadNav = () => {
  return (

      <nav className="flex fixed justify-between shadow-md h-[8%] w-full px-3 py-0.5  ">
        
        <div className="flex w-max justify-center items-center gap-2">
          <img className="h-full w-fit" src="./images/unity-logo.png"/>
          <h1 className="text-[16pt] text-emerald-700 font-bold">Unity University</h1>
        </div>
        <div className=" flex gap-12 items-center text-emerald-700 font-semibold">
        <Link to ="/college"> Home</Link>
                    <Link to ="/module"> Modules </Link>
                    <Link to ="/resources"> Worksheets</Link>
                    <Link to ="/resources"> Exams</Link>
                    <Link to ="/about"> Announcements</Link>
        </div>
        <div className="p-1 flex">
          <div className="flex flex-col items-end text-[11pt]"> 
            <p>Yonas Alemu</p>
            <p>yonasalemu@gmail.com</p>
          </div>
          <img src="./images/user.png" className="w-fit h-full"/>
        </div>
      </nav>
      
      
   
  );
};

export default HeadNav;
