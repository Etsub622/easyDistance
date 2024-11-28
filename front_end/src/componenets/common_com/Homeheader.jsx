import { Link } from "react-router-dom";
import logo from "../../assets/easyDlogo.png"



const Header = () => {
    return (
        <div className="bg-white shadow-lg rounded-2xl flex justify-between items-center px-10 " >
          
                <div className="flex items-center justify-ce">
                    <img src={logo} alt="logo" className="w-16" />
                    <p className="text-customColor-0 font-langar text-30 "> Easy Distance</p>
                </div>
                <div className=" flex justify-between gap-9 font-langar">
                    <Link to ="/" className="hover:text-customColor1-1 hover:border-y-emerald-700 hover:border-y-2 "> Home</Link>
                    <Link to ="/college" className="hover:text-customColor1-1 hover:border-y-emerald-700 hover:border-y-2 "> Collages </Link>
                    <Link to ="/contact" className="hover:text-customColor1-1 hover:border-y-emerald-700 hover:border-y-2 "> Contact Us</Link>
                    <Link to ="/about" className="hover:text-customColor1-1 hover:border-y-emerald-700 hover:border-y-2 "> About Us</Link>
                    <div className="bg-customColor-3 text-white h-7 px-5 rounded-lg flex justify-center">
                        <Link to="/login"> Log in </Link>
                    </div>
                </div>
            </div>
        
    )
} 

export default Header;