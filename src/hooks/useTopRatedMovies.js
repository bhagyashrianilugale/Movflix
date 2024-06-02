import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

      // Fetch data from Top Rating Movies URL and update app store
    const getTopRatedMovies = async ()=>{
        const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;