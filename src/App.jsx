import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';


import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import PizzaSection from "./PizzaSection/PizzaSection";
import Cart from "./Cart/Cart"; 
import CartItem from "./CartItem/CartItem"

const App = () => {
  return (
   <HashRouter>
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

    
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  </HashRouter>
  );
};

export default App;