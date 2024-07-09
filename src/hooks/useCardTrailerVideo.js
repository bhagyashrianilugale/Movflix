import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addCardTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useCardTrailerVideo = (trailerVideoId)=>{

    const dispatch = useDispatch();

    const getMovieVideo = async()=>{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${trailerVideoId}/videos`, API_OPTIONS);
            const json = await data?.json();
        // Filter for Trailer type video data
        const filterData = json?.results.filter((video)=>(video.type ==='Trailer'));
        const trailer = filterData.length ? filterData[0] : json?.results[0];

        //Update moviesSlice
        dispatch(addCardTrailerVideo(trailer));
    }
    
    useEffect(()=>{
       trailerVideoId && getMovieVideo();
    },[trailerVideoId]);
};

export default useCardTrailerVideo;