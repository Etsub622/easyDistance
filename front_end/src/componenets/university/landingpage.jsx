import GraduateGirl from "../../assets/GraduateGirl.png"
import Groupchat from "../../assets/Grouptalk.png"
import Header from "../common_com/Homeheader.jsx"
 

const Landingpage = () => {
    return (
        <>
             <Header RouteHome={false}/>
            <div className="font-poppins" >
                <div className=" flex gap-3">
                    <img src={GraduateGirl} alt="GraduateGirl" className="h-96 ml-14"  />
                    <div className="flex-col flex gap-3 mt-11">
                        <h2 className=" font-semibold text-customColor1-0 text-48">Unity University</h2>
                        <p className="font-medium text-[20pt] ">
                            Unlock your potential with our flexible<br/>
                            online courses. Join our community<br/>
                            and start learning today.
                        </p>
                        <div className="flex justify-start gap-10 ">
                            <button className="text-white bg-customColor1-0 p-2 rounded-xl ">Find Modules</button>
                            <button className="bg-customColor1-2 p-2 rounded-lg "> Worksheets</button>
                        </div>
                    </div>
                </div>
                 <div className="flex m-14 gap-56">
                        <div className=" flex gap-3 flex-col items-center m-20">
                        <h1 className="text-48 font-medium">Wants to join the   <br />
                                      Group Chat?</h1>
                            <button className="text-white bg-customColor1-1 p-2 rounded-xl">Go to Chat </button>
                        </div>
                        <img src={Groupchat} alt="groupchat" className="h-96" />
                    </div>
            </div>
            </>
    )
}
export default Landingpage;