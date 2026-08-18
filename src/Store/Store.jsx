import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import pizzaSlice  from "./pizzaSlice"
import AuthSlice from "./AuthSlice"

const store=configureStore({
    reducer:{
        cartReducer:cartSlice,
        pizzaReducer:pizzaSlice,
        AuthReducer:AuthSlice
        
    }
})
export default store;