import { createSlice } from "@reduxjs/toolkit";

const conFigSlice = createSlice({
        name: "config",
        initialState : {
            lang: "en"
        },

        reducers: {
            changeLanguage: (state, action)=>{
                state.lang = action.payload
            }
        }
});

export const { changeLanguage } = conFigSlice.actions;

export default conFigSlice.reducer;