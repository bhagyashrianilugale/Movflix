import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { TbAlertSquareRounded } from "react-icons/tb";

const Videotitle = ({ title, overview, playFunc }) => {
    const [ isTruncated , setIsTruncated ] = useState(false);

   const handleTruncate = ()=>{
        setIsTruncated(!isTruncated);
    }
    return(
     <>
        <div className="px-4 md:px-16 absolute w-screen pt-[14%] md:pt-[20%] 
                        aspect-video text-white 
                        bg-gradient-to-r from-black opacity-70 cursor-default">
            <h1 className="text-xs sm:text-sm md:text-3xl font-extrabold md:font-bold">{title}</h1>
            <p className={`py-1 md:py-6 font-sans text-sm md:text-lg w-2/4 ${ !isTruncated ?'line-clamp-1':'line-clamp-3'}`}>{overview}</p>
            <div  className={`${ !isTruncated? 'mt-1 md:mt-6': 'md:mt-2'}`}>
                <button 
                      className= "bg-white text-black w-[30%] text-sm sm:w-[14%] md:w-[8%] mx-1 p-1 md:text-lg rounded-lg hover:bg-opacity-80"l
                       onClick={()=>playFunc(0)}>
                      <AiFillCaretRight  className="inline text-xl md:text-2xl font-bold mb-1"/>Play
                </button>
                <button 
                      className="bg-gray-500 px-1 mx-1 sm:w-[20%] md:w-[12%] text-sm py-1 md:text-lg text-white hover:bg-opacity-80 rounded-lg"
                      onClick={ handleTruncate } > 
                      <TbAlertSquareRounded className="inline  text-xl md:text-2xl  font-bold mb-1"
                      /> { !isTruncated? 'More Info': 'Less Info'}
                </button>
            </div>
        </div>
     </>
    );
};

export default Videotitle;