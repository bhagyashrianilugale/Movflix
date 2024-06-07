import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=> store.movies.topRatedMovies);

      // Fetch data from Top Rating Movies URL and update app store
    const getTopRatedMovies = async ()=>{
        const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json =  await data.json();
        dispatch(addTopRatedMovies(json?.results));
    };

    useEffect(()=>{
        // Memoization Logic for topRatedMovies
        !topRatedMovies && getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;