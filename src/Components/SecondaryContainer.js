import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    
    // Subscribe the appstore using useSelector
    const movies = useSelector(store => store.movies);
    return(
        movies.nowPlayingMovies && <div className="-mt-52 relative z-2 bg-black">
            <div className="-mt-32 relative z-2">
               <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
               <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
               <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
               <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
               <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
           </div>
        </div>
    )
}

export default SecondaryContainer;