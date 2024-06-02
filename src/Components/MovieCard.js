import { IMG_CDN_URL } from "../utils/Constants";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

const MovieCard = (props) => {
  const {posterPath,  title, voteCount, voteAverage, releaseDate} = props;
  return (
    <div className="w-44 px-2 my-6 object-cover cursor-pointer">
      <div className=" transition-all duration-900 hover:scale-110">
         <img className="h-38 w-38"src={ IMG_CDN_URL + posterPath}alt="movie_card_img"/>
         <div className="text-white text-xs opacity-60 px-2">
           <p className="truncate">{title}</p>
           <p>{ releaseDate }</p>
           <div className="flex justify-between">
               <p> <FaRegThumbsUp className="inline mb-1 mx-2" />{voteCount}</p>
               <p> <BsStarHalf className="inline mb-1 mx-2" />{Math.floor(voteAverage)}</p>
           </div>
        </div>
      </div>
       
    </div>  
  )
}

export default MovieCard;
