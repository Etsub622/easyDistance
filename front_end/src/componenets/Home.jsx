import Header from "./Homeheader";
import lamp from "../assets/lamp.png"
import { FaArrowRightLong } from "react-icons/fa6";
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"

const Home = () => {
    return (
        <>
            {/* <Header/> */}
            <div>
                <div>
                    <div className="flex justify-between">
                    <div className="m-24">
                        <h1 className="font-langar font- text-48 mb-4">
                        Empower Your Future <br/> withFlexible Learning
                        </h1>
                        <p className="font-langar text-28 ">
                            
                            Unlock your potential with our flexible online<br/>
                            courses. Join our community and start learning<br/>
                            today.
                            </p>
                            <div>
                                <p
                                    className="font-langar bg-customColor-2 text-white mt-3 p-2  flex justify-center w-max rounded-lg">Explore Cources
                                    <FaArrowRightLong className=" flex m-1 w-10 " /></p>
                            </div>
                        
                    </div>
                    <div className="mr-56">
                        <img src={lamp} alt="lamp" className="h-svh"/>
                        </div>
                        
                    </div>
                    <div className="block text-center font-langar text-36">
                        <p>Tired of juggling scattered online
                        <br />resources and messy study materials?</p></div>
                    
                </div>
                <div className="flex justify-around m-10 ">
                    <div className="bg-cardBackground-0 shadow-custom-green  flex-col flex items-center gap-4 p-7 w-64  "> 
                        <img src={card1} alt="image" className="w-20" />
                        <p className="text-28 font-langar text-center">Explore our curated <br />
                            courses across <br />various <br/>departments.</p>
                    </div>
                    <div className="bg-cardBackground-0 shadow-custom-green  flex-col flex items-center gap-4 p-7 w-64"> 
                        <img src={card2} alt="image" className="w-20" />
                        <p className="text-28 font-langar text-center">Dive into focused <br />learning with our <br />expertly designed<br/>
                            modules.</p>
                    </div>
                    <div className="bg-cardBackground-0 shadow-custom-green  flex-col flex items-center gap-4 p-7 w-64 "> 
                        <img src={card3} alt="image" className="w-20" />
                        <p className="text-28 font-langar text-center">Enhance your<br/> learning with our<br/> comprehensive <br/>worksheets.</p>
                    </div>
                </div>
                <div className=" flex ml-52">
                    <div className="font-langar text-48 m-24">
                        <h1 className="text-black pl-11"> Partner </h1>
                        <span className="text-customColor-3 block ">Universities</span>
                        
                    </div>
                    <div class="border-l-4 border-gray-400 h-52 mt-20"></div>
                    <div>
                        
                    </div>
          

                </div>
            </div>
            </>
    )
}
export default Home;