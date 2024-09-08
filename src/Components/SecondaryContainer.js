import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Footer from "./Footer";

const SecondaryContainer = ()=>{
    
    // Subscribe the appstore using useSelector
    const movies = useSelector(store => store.movies);
    return(
      movies?.nowPlayingMovies &&
      <>
        <div className="bg-black">
            <div className="-mt-12 sm:-mt-52 md:-mt-48 relative px-4 md:px-10 z-4">
               <MovieList Title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
               <MovieList Title={"Trending"} movies={movies?.topRatedMovies}/>
               <MovieList Title={"Popular"} movies={movies?.popularMovies}/>
               <MovieList Title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
           </div>
       </div>
       <Footer/>
      </>
    );
};

export default SecondaryContainer;