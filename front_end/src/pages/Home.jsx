import Header from "../componenets/common_com/Homeheader";
import lamp from "../assets/lamp.png"
import { FaArrowRightLong } from "react-icons/fa6";

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
            </div>
            </>
    )
}
export default Home;