import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';


import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import FirstGrade from "./FirstGrade/FirstGrade";
import Cart from "./Cart/Cart"; 
import CartItem from "./CartItem/CartItem"
import SecondGrade from "./SecondGrade/SecondGrade"
import ThirdGrade from "./ThirdGrade/ThirdGrade"
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
          <FirstGrade />
          <SecondGrade />
          <ThirdGrade />
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