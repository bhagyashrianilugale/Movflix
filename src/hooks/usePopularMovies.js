import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{

      const dispatch = useDispatch();
      const popularMovies = useSelector(store=> store.movies.popularMovies);

      // Fetch data from Popular Movies URL and update app store
        const getPopularMovies = async ()=>{
        try{
            const data =  await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        }catch(err){
            console.log(err);
        }
        
    };

    useEffect(()=>{
        // Memoization logic for popularMovies
        !popularMovies && getPopularMovies();
    }, []);
};

export default usePopularMovies;