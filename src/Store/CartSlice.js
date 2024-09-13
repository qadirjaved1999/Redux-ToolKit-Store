import { createSlice } from "@reduxjs/toolkit";

// Firstly Declare Initial State
// const initialState = [];

// 2) Create a Slice. and pass one object inside the Slice.
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // Redux => return [...state, action.payload]
        add(state, action){
            //Actually Slice state.push(action.payload) <=>  return [...state, action.payload]
           state.push(action.payload)
        },
        remove(state, action){
         return state.filter((item) => item.id !== action.payload)
        }
    }
});


export const {add, remove} = cartSlice.actions
export default cartSlice.reducer