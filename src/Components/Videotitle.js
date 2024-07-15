import { AiFillCaretRight } from "react-icons/ai";
import { TbAlertSquareRounded } from "react-icons/tb";

const Videotitle = ({ title, overview }) => {
    return(
     <>
        <div className="px-16 absolute w-screen pt-[20%] 
                        aspect-video text-white 
                        bg-gradient-to-r from-black opacity-70">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-2/4">{overview}</p>
            <div>
                <button className= "bg-white text-black w-[10%] mx-4 px-2 py-2 text-2xl rounded-lg hover:bg-opacity-80">
                      <AiFillCaretRight  className="inline text-2xl font-bold mb-1"/>Play
                </button>
                <button className="bg-gray-500 px-2 mx-4 w-[14%] py-2 text-2xl text-white hover:bg-opacity-80 rounded-lg"> 
                      <TbAlertSquareRounded className="inline text-2xl font-bold mb-1" /> More Info
                </button>
            </div>
        </div>
     </>
    );
};

export default Videotitle;