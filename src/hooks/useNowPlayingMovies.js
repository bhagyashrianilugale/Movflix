import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
    const now_playing = useSelector(store=> store.movies.now_playing);

    // Fetch data from Now playing Movies URL and update app store
    const getNowPlayingMovies = async ()=>{
        try{
            const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
            const json = await data?.json();
            dispatch(addNowPlayingMovies(json?.results));
        }catch(err){
            console.log(err);
        }
        
    };

    useEffect(()=>{
        //Memoization logic for now_playing movies
       !now_playing && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;