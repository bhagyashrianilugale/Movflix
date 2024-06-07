import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { SEARCH_PAGE_BG_URL } from '../utils/Constants';


const GptSearchPage = () => {
  
  return (
    <div>
        <div className="fixed -z-10">
                   <img  className="h-screen w-screen" src={SEARCH_PAGE_BG_URL}
                  alt="background_img"/>
        </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearchPage;
