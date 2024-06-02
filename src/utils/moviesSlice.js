import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        trailerVideos: null
    },
    reducers : {
        addNowPlayingMovies : (state, action)=>{
             state.nowPlayingMovies = action.payload;
        },

        addTopRatedMovies : (state, action)=>{
            state.topRatedMovies = action.payload;
       },

        addPopularMovies : (state, action)=>{
            state.popularMovies = action.payload;
       },
       
        addUpcomingMovies : (state, action)=>{
        state.upcomingMovies = action.payload;
     },
       
      addTrailerVideos : (state, action)=>{
            state.trailerVideos = action.payload;
    }
    }
});

export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies, addUpcomingMovies, addTopRatedMovies  } = moviesSlice.actions;

export default moviesSlice.reducer;