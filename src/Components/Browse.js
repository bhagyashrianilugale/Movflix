import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Browse = ()=>{
    
    const showGptSearch =  useSelector((store)=> store.gpt.showGptSearch);

    // Fetch data from TMDB API and update appstore
     useNowPlayingMovies();
     usePopularMovies();
     useTopRatedMovies();
     useUpcomingMovies();

    
    return(
        <div>
            <Header/>
            {
                showGptSearch 
                ? <GptSearch/> 
                : <> 
                   <MainContainer/>
                   <SecondaryContainer/>
                </>
            }
            <Footer/>
        </div>
    );
};

export default Browse;