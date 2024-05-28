import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import Videotitle from "./Videotitle";

const MainContainer = ()=>{
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies  === null) return;

    const mainMovie = movies[0];
    const { original_title, overview , id} = mainMovie;
    return(
        <div> 
              <Videotitle title ={original_title} overview = {overview}/>
              <VideoBackground movieId ={id}/>
        </div>
    )
};

export default MainContainer;