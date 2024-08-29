import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import Videotitle from "./Videotitle";
import { useState } from "react";

const MainContainer = ()=>{
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);
    const [isPlay, setIsPlay ] = useState(null);

    if(movies === null) return;

    const mainMovie = movies[1];
    const { original_title, overview, id } = mainMovie;
    return(
        <div> 
              <Videotitle title ={original_title} overview = {overview} playFunc={setIsPlay}/>
              <VideoBackground movieId ={id} playStatus={isPlay}/>
        </div>
    );
};

export default MainContainer;