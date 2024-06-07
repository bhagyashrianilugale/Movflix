import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
          showGptSearch: false,
          showLoading: false,
          getGetSearch: null,
          moviesResults: null,
          moviesSearch: null
    },
    reducers: {
        toggleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        
        toggleLoading : (state)=>{
             state.showLoading = !state.showLoading;
        },
       addGptSearch : (state, action)=>{
            const { moviesSearch, moviesResults, loadingState } = action.payload;
            state.moviesSearch = moviesSearch;
            state.moviesResults = moviesResults;
            state.showLoading = loadingState;
        },
    },
});

export const { toggleGptSearchView,toggleLoading, addGptSearch } = gptSlice.actions;
export default gptSlice.reducer;