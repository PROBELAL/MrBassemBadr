import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import PizzaSection from "./PizzaSection/PizzaSection";
import Cart from "./Cart/Cart"; 
import CartItem from "./CartItem/CartItem"

const App = () => {
  return (
    <BrowserRouter>
      
      <Header /> 
      
      <Routes>
        
        <Route 
          path="/" 
          element={
            <>
              <Slider/>
              <PizzaSection />
              

            </>
          } 
        />
        
        
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;