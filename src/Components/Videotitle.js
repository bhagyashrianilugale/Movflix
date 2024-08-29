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
        <div className="px-4 lg:px-16 absolute w-screen pt-[14%] lg:pt-[20%] 
                        aspect-video text-white 
                        bg-gradient-to-r from-black opacity-70 cursor-default">
            <h1 className="text-sm lg:text-3xl font-extrabold lg:font-bold">{title}</h1>
            <p className={`py-1 lg:py-6 text-xs lg:text-lg w-2/4 ${ !isTruncated ?'line-clamp-1':'line-clamp-3'}`}>{overview}</p>
            <div  className={`${ !isTruncated? 'mt-1 lg:mt-6': 'lg:mt-2'}`}>
                <button 
                      className= "bg-white text-black w-[14%] lg:w-[8%] mx-1 px-1 py-1 lg:text-lg rounded-lg hover:bg-opacity-80"l
                       onClick={()=>playFunc(0)}>
                      <AiFillCaretRight  className="inline text-xs lg:text-2xl font-bold mb-1"/>Play
                </button>
                <button 
                      className="bg-gray-500 px-1 mx-1 w-[28%] lg:w-[12%] py-1 text-lg text-white hover:bg-opacity-80 rounded-lg"
                      onClick={ handleTruncate } > 
                      <TbAlertSquareRounded className="inline  text-sm lg:text-2xl  font-bold mb-1"
                      /> { !isTruncated? 'More Info': 'Less Info'}
                </button>
            </div>
        </div>
     </>
    );
};

export default Videotitle;