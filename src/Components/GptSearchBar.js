import React from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang);
  console.log(langkey)
  console.log(lang);
  return (
    <div className="pt-[10%]">
         <form className="grid grid-cols-12 mx-[20%] bg-black rounded-lg">
            <input type="text" 
                   className="py-2 px-2 col-span-10 m-2 rounded-lg" 
                   placeholder={lang[langkey].gptSearchPlaceholder}></input>
            <button className="py-2 px-2 bg-red-800 col-span-2 text-white m-2 rounded-lg">
              {lang[langkey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar
