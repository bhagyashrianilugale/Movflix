import { AiFillCaretRight } from "react-icons/ai";
import { TbAlertSquareRounded } from "react-icons/tb";

const Videotitle = ({ title, overview }) => {
    return(
        <div className="px-24 absolute w-screen pt-[20%] 
                        aspect-video text-yellow-50 
                        bg-gradient-to-r from-black opacity-60">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6 text-sm w-2/4">{overview}</p>
            <div>
                <button className= "bg-white text-black p-1 px-6 text-xl rounded-lg hover:bg-opacity-80">
                      <AiFillCaretRight  className="inline text-4xl font-bold mb-1"/>Play
                </button>
                <button className="bg-gray-500 mx-2 p-1 px-6 text-xl text-white hover:bg-opacity-80 rounded-lg"> 
                      <TbAlertSquareRounded className="inline text-4xl font-bold mb-1" /> More Info
                </button>
            </div>
        </div>
    )
};

export default Videotitle;