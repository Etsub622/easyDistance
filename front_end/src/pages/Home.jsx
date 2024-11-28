import Header from "../componenets/common_com/Homeheader";
import lamp from "../assets/lamp.png";
import { FaArrowRightLong } from "react-icons/fa6";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <div className="flex justify-between">
            <div className="mx-16 my-24 w-[50%]">
              <h1 className="font-poppins text-[36px] font-semibold mb-4  ">
                Empower Your{" "}
                <strong className="text-[#098b6b] font-medium">Future</strong>{" "}
                with Flexible and Accessible Distance Learning
              </h1>
              <p className="font-Garamond text-[20px]  ">
                Unlock your potential with our flexible online
                <br />
                courses. Join our community and start learning
                <br />
                today.
              </p>
              <div className="">
                <button className=" hover:bg-customColor1-0 font-Garamond bg-customColor-2 font-semibold text-white text-[17px] mt-3 px-2 py-[10px] flex justify-center w-max rounded-lg">
                  Explore Cources
                  <FaArrowRightLong className=" flex mt-[7px] ml-2 " />
                </button>
              </div>
            </div>
            <div className="mr-10 w-[50%]">
              <img src={lamp} alt="lamp" className="h-svh" />
            </div>
          </div>
          <div className="block text-center font-Garamond text-36 font-semibold">
            <p>
              Tired of juggling scattered online
              <br />
              resources and messy study materials?
            </p>
          </div>
        </div>
        <div className="flex justify-around m-10 ">
          <div className="bg-cardBackground-0 shadow-custom-green  flex-col flex items-center gap-4 p-7 w-64  ">
            <img src={card1} alt="image" className="w-20" />
            <p className="text-28 font-Garamond text-center">
              Explore our curated <br />
              courses across <br />
              various <br />
              departments.
            </p>
          </div>
          <div className="bg-cardBackground-0 shadow-custom-green  flex-col flex items-center gap-4 p-7 w-64">
            <img src={card2} alt="image" className="w-20" />
            <p className="text-28 font-Garamond text-center">
              Dive into focused <br />
              learning with our <br />
              expertly designed
              <br />
              modules.
            </p>
          </div>
          <div className="bg-cardBackground-0 shadow-custom-green  flex-col flex items-center gap-4 p-7 w-64 ">
            <img src={card3} alt="image" className="w-20" />
            <p className="text-28 font-Garamond text-center">
              Enhance your
              <br /> learning with our
              <br /> comprehensive <br />
              worksheets.
            </p>
          </div>
        </div>
        <div className=" flex ml-52 mb-10">
          <div className="font-Garamond text-48 m-24">
            <h1 className="text-black pl-11"> Partner </h1>
            <span className="text-customColor-3 block ">Universities</span>
          </div>
          <div className="border-l-4 border-gray-400 h-48 mt-24 "></div>
          <div className="mt-20 ">
            <div className=" flex flex-col gap-6 m-1">
              <div className="flex items-center">
                <div className="border-y-2 border-gray-300 w-32"></div>
                <span className="  font-Garamond text-30">
                  Unity University
                </span>
              </div>
              <div className="flex items-center">
                <div className="border-y-2 border-gray-300 w-56"></div>
                <span className=" font-Garamond text-30">
                  St.Mary University
                </span>
              </div>
              <div className="flex items-center">
                <div className="border-y-2 border-gray-300 w-72"></div>
                <span className=" font-Garamond text-30">
                  Riftvalley University
                </span>
              </div>
              <div className="flex items-center">
                <div className="border-y-2 border-gray-300 w-28"></div>
                <span className=" font-Garamond text-30">Admas University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
