import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { SEARCH_PAGE_BG_URL } from '../utils/Constants';


const GptSearchPage = () => {
  
  return (
    <>
        <div className="fixed -z-10">
                   <img  className="h-screen w-full md:h-screen md:w-screen enhanced-image" 
                         src={SEARCH_PAGE_BG_URL}
                         alt="background_img"/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </>
  );
};

export default GptSearchPage;
