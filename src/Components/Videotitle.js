import { AiFillCaretRight } from "react-icons/ai";
import { TbAlertSquareRounded } from "react-icons/tb";

const Videotitle = ({ title, overview }) => {
    return(
     <>
        <div className="px-16 absolute w-screen pt-[20%] 
                        aspect-video text-white 
                        bg-gradient-to-r from-black opacity-70 cursor-default">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="py-6 text-sm w-2/4">{overview}</p>
            <div>
                <button className= "bg-white text-black w-[10%] mx-1 px-1 py-1 text-xl rounded-lg hover:bg-opacity-80">
                      <AiFillCaretRight  className="inline text-2xl font-bold mb-1"/>Play
                </button>
                <button className="bg-gray-500 px-1 mx-4 w-[14%] py-1 text-xl text-white hover:bg-opacity-80 rounded-lg"> 
                      <TbAlertSquareRounded className="inline text-2xl font-bold mb-1" /> More Info
                </button>
            </div>
        </div>
     </>
    );
};

export default Videotitle;