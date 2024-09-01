import unityLogo from "../../assets/unityLogo.png"
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const Uniheader = () => {
    return (
        <>
        <div>
           <div className="bg-white shadow-lg rounded-2xl " >
            <div className="flex justify-between mr-3">
                <div className="flex gap-1">
                    <img src={unityLogo} alt="logo" className="w-10 " />
                    <p className="text-customColor1-0 font-langar text-30 "> Unity University</p>
                </div>
                <div className=" flex justify-between gap-7 font-langar text-customColor1-0 m-2">
                    <Link to ="/home"> Home</Link>
                    <Link to ="/module"> Modules </Link>
                    <Link to ="/resources"> Worksheets</Link>
                    <Link to ="/resources"> Exams</Link>
                    <Link to ="/about"> Announcements</Link>
                    <div className=" flex justify-between gap-8" >
                            <Link className="bg-customColor-0 text-white h-7  w-16 rounded-lg flex justify-center ml-6" to="/logout"> Logout </Link>
                            <IoPersonSharp className=" text-30" />
                    </div>
                </div>
            </div>
        </div>
            </div>
            </>
    )
}

export default Uniheader;