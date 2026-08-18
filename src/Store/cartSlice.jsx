import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    items: [], 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       
        addItem: (state, action) => {
            
           const newItem = { ...action.payload, uniqueId: Date.now() }; 
            state.items.push(newItem);
        },

        
        removeItem: (state, action) => {
           
            state.items = state.items.filter((item) => item.uniqueId !== action.payload);
        }
    }
});


export const { addItem, removeItem } = cartSlice.actions;


export default cartSlice.reducer;