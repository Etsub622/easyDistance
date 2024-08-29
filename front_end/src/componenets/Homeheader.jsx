import { Link } from "react-router-dom";
import logo from "../assets/easyDlogo.png"



const Header = () => {
    return (
        <div className="bg-white shadow-lg rounded-2xl " >
            <div className="flex justify-between mr-32">
                <div className="flex">
                    <img src={logo} alt="logo" className="w-16" />
                    <p className="text-customColor-0 font-langar text-30 "> Easy Distance</p>
                </div>
                <div className=" flex justify-between gap-5 font-langar m-2">
                    <Link to ="/home"> Home</Link>
                    <Link to ="/college"> Collages </Link>
                    <Link to ="/contact"> Contact Us</Link>
                    <Link to ="/about"> About Us</Link>
                    <div className="bg-customColor-3 text-white h-7  w-16 rounded-lg flex justify-center ml-6">
                        <Link to="/"> Log in </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
} 

export default Header;