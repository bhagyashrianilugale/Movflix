import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import { Circles } from 'react-loading-icons'

const GptMovieSuggestions = () => {

  const { moviesSearch, moviesResults, showLoading}  = useSelector(store=> store.gpt);

  if(showLoading) return (
            <div className="px-6 py-4 m-10 lg:m-20 bg-black/80 h-screen"><Circles className="mx-auto mt-40"/></div> 
  );
  if(!moviesSearch) return null;
  return (
    <>
       <div className="px-6 py-4 my-4 mx-2 lg:m-20 bg-opacity-40 backdrop-blur-xl bg-transparent">
          <div>{ moviesSearch?.map((movieName, index)=>(
                <MovieList 
                 key={movieName} 
                 Title={movieName} 
                 movies={moviesResults[index]}/>
            ))}
         </div>
       </div>
    </>
  );
};

export default GptMovieSuggestions
