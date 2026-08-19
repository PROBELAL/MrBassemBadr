import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import AuthSlice from "./AuthSlice"
import ProductSlice from "./ProductSlice"

const store=configureStore({
    reducer:{
        cartReducer:cartSlice,
        AuthReducer:AuthSlice,
        ProductData:ProductSlice

        
    }
})
export default store;