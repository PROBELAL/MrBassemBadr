import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';


import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import PizzaSection from "./PizzaSection/PizzaSection";
import Cart from "./Cart/Cart"; 
import CartItem from "./CartItem/CartItem"
import BurgerSection from "./Burger/BurgerSection"
import ShawermaSection from "./ShawermaSection/ShawermaSection"
import HomeSection from "./HomeSection/HomeSection"

const App = () => {
  return (
   <HashRouter>
  <Header /> 
  
  <Routes>
   
    <Route 
      path="/" 
      element={
        <>
          <HomeSection/>
          <Slider/>
          <PizzaSection />
          <BurgerSection />
          <ShawermaSection />
        </>
      } 
    />
    
    <Route path="/cart" element={<Cart />} />

    
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  </HashRouter>
  );
};

export default App;