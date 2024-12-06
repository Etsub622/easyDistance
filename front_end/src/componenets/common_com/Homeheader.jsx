import { Link } from "react-router-dom";
import logo from "../../assets/easyDlogo.png";
import { IoPersonSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Header = ({ RouteHome }) => {
  const HomeHeadElem = ["Home", "Colleges", "Contact Us", "About Us"];
  const CollegeHeadElem = [
    "Home",
    "Modules",
    "Worksheets",
    "Exams",
    "Announcements",
  ];
  return (
    <div className="bg-white font-poppins shadow-lg rounded-2xl font-medium flex justify-between items-center px-10 ">
      <div className="flex items-center ">
        <img src={logo} alt="logo" className="w-16" />
        <p className="text-customColor-0  text-30 "> Easy Distance</p>
      </div>
      <div className=" flex justify-between items-center gap-9 ">
        {RouteHome
          ? HomeHeadElem.map((elem, index) => (
              <Link
                key={index}
                to={elem}
                className="hover:text-customColor1-1 hover:border-b-customColor1-1 hover:border-b-2 "
              >
                {" "}
                {elem}
              </Link>
            ))
          : CollegeHeadElem.map((elem, index) => (
              <Link
                key={index}
                to="/"
                className="hover:text-customColor1-1 hover:border-b-customColor1-1 hover:border-b-2 "
              >
                {" "}
                {elem}
              </Link>
            ))}

        <div className="bg-customColor-3 text-white font-semibold text-[12pt] py-[5px] px-4 rounded-lg flex justify-center">
          {RouteHome ? (
            <Link to="/login"> Log in </Link>
          ) : (
            <Link to="/logout"> Logout </Link>
          )}
        </div>
        {RouteHome ? "" : <IoPersonSharp className=" text-[30px]" />}
      </div>
    </div>
  );
};

export default Header;
