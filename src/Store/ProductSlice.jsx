import { createSlice } from "@reduxjs/toolkit";
import PizzaImg from "../assets/imgSlider2.jpg";
import { GiFullPizza } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";




import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"
import img7 from "../assets/img7.jpeg"
import img8 from "../assets/img8.jpeg"

const initialState={
  Products : [],
searchTerm:""

}

const ProductSlice=createSlice({
    name:"Products",
    initialState:initialState,
    reducers:{
        addProduct:(state,action)=>{state.Products.push(action.payload);},
        setSearchTerm:(state,action)=>{state.searchTerm=action.payload},
        setProducts:(state,action)=>{state.Products=action.payload},
        deleteProduct: (state, action) => {state.Products = state.Products.filter(product => product._id !== action.payload);}
    }
})

export const {addProduct,setSearchTerm,setProducts}=ProductSlice.actions;
export default ProductSlice.reducer;