import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import Wishlist from "../pages/wishlist/Wishlist";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
