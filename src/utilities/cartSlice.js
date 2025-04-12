import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart", 
    initialState : {
        items : [],
    },
    reducers : {
        addItem :(state, action) =>{
            //const newState = [...state]
            //newState.items.push(action.payload);
            //return newState

            //we are mutating / modifying state here
            state.items.push(action.payload);
        }, 
        removeItem : (state,action) =>{
            state.items.pop(action.payload);
        },
        //originalState = ["pizza"]
        clearCart : (state) => {
            state.items.length = 0 ;
            //return {items : []} // the new object will be replaced in the originalState = {items:[]}
        },
    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;