import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    
    // Fetch data from UpcomingMovies URL and update app store
    const getUpcomingMovies = async ()=>{
        const data =  await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;