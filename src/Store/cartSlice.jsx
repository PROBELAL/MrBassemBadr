import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        
        setCartItems: (state, action) => {
            state.items = action.payload;
        },

        
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item._id !== action.payload);
        }
    }
});

export const { setCartItems, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;