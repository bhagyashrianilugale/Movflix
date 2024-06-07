import { IMG_CDN_URL } from "../utils/Constants";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { Dialog } from 'react-dialog-element';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos,  addTrailerVideoId } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/Constants";


const MovieCard = (props) => {
   
   const dispatch = useDispatch();
   const [ movieId, setMovieId ] = useState(null);
   const [ isOpen, setIsOpen ] = useState(false);
   const trailerVideoId = useSelector((store)=> store.movies?.trailerVideoId);
   console.log(trailerVideoId);
   const { posterPath,  title, voteCount, voteAverage, releaseDate, posterId } = props;
   
   //Fetch Trailer 
   const getMovieVideo = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${trailerVideoId}/videos`, API_OPTIONS);
    const json = await data?.json();
    console.log(json);

    // Filter for Trailer type video data
    // const filterData = json?.results.filter((video)=>(video.type ==='Trailer'));
    // const trailer = filterData.length ? filterData[0] : json.results[0] ;
    //  console.log(trailer);
    //Update moviesSlice
 };

 trailerVideoId && getMovieVideo();
 
 const openBox = (e) => {
  dispatch(addTrailerVideoId(e.target.id));
  setIsOpen(true);
};

const closeBox = () => {
  setIsOpen(false);
};

 useEffect(()=>{
      //  Memoization Logic for trailerVideo
     (trailerVideoId) && getMovieVideo();
 },[]);

   
   if(!posterPath)return(null);
  return (
    <>
    <div onClick={openBox}>
      <div className="w-52 px-2 my-4 mx-2 bg-black cursor-pointer transition-all duration-900 hover:scale-110">
          <div>
              <div>
                 <img className="h-38 w-42"id={posterId} src={ IMG_CDN_URL + posterPath} alt="movie_card_img"/>
             </div>
          </div>
        </div>
      </div>
      {isOpen && <Dialog isOpen={isOpen} setOpen= {setIsOpen} className="w-[60%] h-[70%] rounded-xl">
                <div className= "bg-white text-black ">
                          <RxCross2 className="text-2xl m-2 font-extrabold"onClick={closeBox}/>
                          {/* <VideoBackground/> */}
                           <div>
                            <p>{ title }</p>
                                  <p>{ releaseDate } </p>
                                  <div>
                                <p><FaRegThumbsUp  />{voteCount}</p> 
                                <p><BsStarHalf />{(Math.floor(voteAverage))}</p>
                               </div>
                           </div>
                  </div>
        </Dialog> 
      }
    </>
    );
};

export default MovieCard;
