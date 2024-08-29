import React from "react";
import sidenavdata from "./sidenav-data";

const SideNav = () => {
  return (
    <div >
      <div className="w-[20%] h-[95vh]  fixed shadow-xl pt-10 pb-10  flex flex-col justify-between">
        <div className="flex flex-col gap-8 pl-10 text-left">
            {sidenavdata.map((d) => (
            <div className=" flex gap-4">
            <img className="w-7 h-7" src={d.img_src}/>
            <a className="text-slate-800 font-semibold"> {d.course}</a>
          </div>
            ))}
        </div>
        <div className="flex flex-col text-left gap-3 px-9">
            <button  className="bg-[#E9F5FE] self-start w-full py-1.5  rounded-[15px]">Settings</button>
            <button className="bg-[#91E0CC] self-start w-full py-1.5 rounded-[15px]">
Logout
            </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
