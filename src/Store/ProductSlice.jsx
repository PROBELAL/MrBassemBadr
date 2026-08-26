import { createSlice } from "@reduxjs/toolkit";
import PizzaImg from "../assets/imgSlider2.jpg";
import { GiFullPizza } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";

const initialState={
  Products:[{
      id: 1,
      title: "Margherita Pizza",
      image: PizzaImg,
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiFullPizza },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
    },
    {
      id: 2,
      title: "Pepperoni Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEEuvHxs-W03FTM0zWr9BTT5V0I04d5fytROX57pXUZUeMqHhG6LNmeAJ&s=10",
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiFullPizza },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
      
    },
    {
      id: 3,
      title: "BBQ Chicken Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTKvcwjbgO6Z_1N9VfQlmRl7jTThwzQlMYTfl8Q97vx6CdUYHRO0KRk0&s=10",
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiFullPizza },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
    },{
      id: 4,
      title: "Hawaiian Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25La52MJBBu1bO3DM51GYvpFcXcfEswoP8YaMt1FmTTKbJh1kzFJWDRO6&s=10",
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiFullPizza },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
    },{
      id: 5,
      title: "Meat Lovers Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOOMgmP5Eylf7QnVvOlY29gaTcEftnwG_vH7-_eCR3-yp3J1Cqw_NQyw&s=10",
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiFullPizza },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
    },{
      id: 6,
      title: "Veggie Supreme Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50cMzElkAp51bvp9qjfFTCe4G4DNwCj-WmYepq2sqmQQOwOn2qDEkjro&s=10",
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiFullPizza },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
    },{
      id: 7,
      title: "Four Cheese Pizza",
      image: "https://dinnerthendessert.com/wp-content/uploads/2023/09/Brooklyn-Style-Pizza-021-e1739392916685.jpg",
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiFullPizza },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
    },{
      id: 8,
      title: "Buffalo Chicken Pizza",
      image: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza-jpg",
      description: "Delicious Pizza with meat, fresh salad, and our secret sauce.",
      price: 15,
      ingredients: [
          { name: "Pizza", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Salad", icon: LuSalad }
      ],
      category:"Pizza"
    },

    {
      id: 9,
      title: "Classic Smash Burger",
      image: "https://assets.bonappetit.com/photos/5d1cb1880813410008e914fc/1:1/w_2560%2Cc_limit/Print-Summer-Smash-Burger.jpg",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },
    {
      id: 10,
      title: "Double Cheese Burger",
      image: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },
    {
      id: 11,
      title: "Bacon BBQ Burger",
      image: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },
    {
      id: 12,
      title: "Mushroom Swiss Burger",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuOtTRl4qlERxJ-_OmGfbZpJrOokQcl6Ft8bcHCLAGZUOtROA7cGTEVhJ&s=10",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },
    {
      id: 13,
      title: "Spicy Jalapeno Burger",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxPdpVotzwxxVFuFUX53fqtd_Jj3DQlxGmW5yV7pYKZUWqn0kPsNWfJI&s=10",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },
    {
      id: 14,
      title: "Texas Smokehouse Burger",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGsW4DHN1VaURDxLe-maWYBRp8UJxAPpDNIvf06IkRg&s=10",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },
    {
      id: 15,
      title: "Crispy Chicken Burger",
      image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },
    {
      id: 16,
      title: "Vegan Beyond Burger",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nCnuFJNdwrO-4WUj9Skng3p6A9KBRgrVM8WViQ7TKzQJD3k1JZx9FGc&s=10",
      description: "Delicious Burger with meat, french frise, and our secret sauce.",
      price: 20,
      ingredients: [
          { name: "Burger", icon: GiHamburger },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Burger"
    },

    {
      id: 17,
      title: "Classic Chicken Shawerma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhEizgU5DnGHFXU-o7qi9vLdA1uQH3uKwRS3Rg0v5WQXuA84-uMe1tws&s=10",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    },
    {
      id: 18,
      title: "Beef Meat Shawerma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9uyICnRQhKnJ4gepI8ZD_FGAFMr11KuZLMPPu9J1oNpjbhOBVBmCFqMq&s=10",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    },
    {
      id: 19,
      title: "Spicy Syrian Shawerma",
      image: "https://i.ytimg.com/vi/9iNDG0Rr7oI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAxiLQIcVR2PyqC4DFqlIee4R3P3w",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    },
    {
      id: 20,
      title: "Mixed Grill Shawerma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_I_2VH6GyFSca4nEZA_hxshzA0cn8QHrwrFL3Uk-mfTS_wOC4R91m7yb&s=10",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    },
    {
      id: 21,
      title: "Arabic Style Shawerma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtLQ_OQ8FeMIF-XD4wc8DI1QDooTIewEnocXncJFCW4UbyLFWqGFQ1uc&s=10",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    },
    {
      id: 22,
      title: "Extra Garlic Shawerma",
      image: "https://i.ytimg.com/vi/YXLnpPu3Tao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDWKg530Xxg165ACEb-HIZ2PFEwzA",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    },
    {
      id: 23,
      title: "Shawerma Wrap Combo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTdwkWDiHiRutoJyP9RkYz_T23QDg2znehlwNRMsApA&s",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    },
    {
      id: 24,
      title: "Lamb Shawerma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBIh-1BdYqSv9K42xchRX9-jQbe-hM9i9F6yDjjDxIOXeCYpsYKKqHczJ&s=10",
      description: "Delicious Shawerma with Chicken, french frise, and our secret sauce.",
      price: 25,
      ingredients: [
          { name: "Shawerma", icon: GiSandwich },
          { name: "Meat", icon: TbMeat },
          { name: "Fries", icon: CiFries }
      ],
      category:"Shawerma"
    }
    ],
searchTerm:""

}

const ProductSlice=createSlice({
    name:"Products",
    initialState:initialState,
    reducers:{
        addProduct:(state,action)=>{state.Products.push(action.payload);},
        setSearchTerm:(state,action)=>{state.searchTerm=action.payload}
    }
})

export const {addProduct,setSearchTerm}=ProductSlice.actions;
export default ProductSlice.reducer;