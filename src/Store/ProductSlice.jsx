import { createSlice } from "@reduxjs/toolkit";
import PizzaImg from "../assets/imgSlider2.jpg";
import { GiFullPizza } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
const initialState={
    Products:[{
  id: 1,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
},
{
  id: 2,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
  
},
{
  id: 3,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
},{
  id: 4,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
},{
  id: 5,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
},{
  id: 6,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
},{
  id: 7,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
},{
  id: 8,
  title: "Susises Pizza",
  image: PizzaImg,
  description: "Delicious pizza with meat, fresh salad, and our secret sauce.",
  price: 15,
  ingredients: [
      { name: "Pizza", icon: GiFullPizza },
      { name: "Meat", icon: TbMeat },
      { name: "Salad", icon: LuSalad }
  ],
  catigory:"pizza"
},]}
const ProductSlice=createSlice({
    name:"Products",
    initialState:initialState,
    reducers:{
        addProduct:(state,action)=>{state.Products.push(action.payload);}
    }
    
})
export const {addProduct}=ProductSlice.actions;
export default ProductSlice.reducer;