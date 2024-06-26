import { createSlice } from "@reduxjs/toolkit";

const tileSlice = createSlice({
    name:"tile",
    initialState:{
        selectedTile:null,
        readTile:"",
    },
    reducers:{
        tileToEdit:(state,action)=>{
            state.selectedTile=action.payload;
        },
        tileToRead:(state,action)=>{
            state.readTile = action.payload;
        }
    }
})

export const {tileToEdit,tileToRead} = tileSlice.actions;
export default tileSlice.reducer;

