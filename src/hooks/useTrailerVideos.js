import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useTrailerVideos = (movieId)=>{

    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=> store.movies?.trailerVideos);
    

     //Fetch Trailer 
    const getMovieVideo = async()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
      const json = await data.json();
      console.log(json);
    
      // Filter for Trailer type video data
      const filterData = json?.results.filter((video)=>(video.type ==='Trailer'));
      const trailer = filterData.length ? filterData[0] : json.results[0] ;

      //Update moviesSlice
      dispatch(addTrailerVideos(trailer));
   };
   
   useEffect(()=>{
         // Memoization Logic for trailerVideo
         !trailerVideo &&  getMovieVideo();
   },[]);
  };

export default useTrailerVideos;