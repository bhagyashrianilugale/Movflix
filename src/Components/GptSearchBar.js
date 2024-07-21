import React, { useRef } from 'react';
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import genAI from '../utils/gemini';
import { API_OPTIONS } from '../utils/Constants';
import { addGptSearch, toggleLoading } from '../utils/gptSlice';
import Error from '../Components/Error'


const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movies in TMDB

  const searchMovieTMDB = async(movie)=>{
        const data = await fetch(
              "https://api.themoviedb.org/3/search/movie?query="+ 
              movie + "&include_adult=false&language=en-US&page=1", 
              API_OPTIONS
            );

        const json = await data?.json();
        return json?.results;
  }

  const handleGptSearchClick = async()=>{

    // Make API call to Gemini API call and get Movie results
    if(!searchText.current.value){ searchText.current.value = "Funny indian retro movies" }
     const query = "Act as a movie Recommendation system and suggest some latest movies for the query:" +
                        searchText.current.value +
                    "only give me names of five movies comma seperated like the example result given ahead Example Result: Gadar, Sholay, Don, Golmal, Koi Mil gaya";
     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
     const prompt = query;
     const result = await model.generateContent(prompt);
     
     const response = result.response;
  
    if(response){
        // Recommended Movies
        const getMovies = response.text().split(",");
        
        const moviePromises = getMovies.map((movie)=>searchMovieTMDB(movie));
        // [promise, promise, promise, promise, promise]
        dispatch(toggleLoading());
        const TMDBResults = await Promise.all(moviePromises);
        // update gptSlice with moviesSearch and MoviesResults
        dispatch(addGptSearch({moviesSearch: getMovies, moviesResults: TMDBResults, loadingState: false}));
     }
    else{<Error/>}
  }

  return (
    <>
    <div className="pt-[10%]">
         <form className="grid grid-cols-12 mx-[20%] bg-black rounded-lg" onSubmit={(e)=> e.preventDefault()}>
            <input type="text" 
                   className="py-2 px-2 col-span-10 m-2 rounded-lg  placeholder-black text-lg font-bold text-center" 
                   ref={searchText}
                   placeholder={lang[langkey].gptSearchPlaceholder}></input>
            <button className="py-2 px-2 bg-red-800 col-span-2 text-white m-2 rounded-lg" onClick={handleGptSearchClick}>
              {lang[langkey].search}
            </button>
        </form>
    </div>
   </>
  );
};

export default GptSearchBar;
