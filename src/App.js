import React from "react";
import './App.css';
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Favourites from "./components/favourites";
import "bootstrap/dist/css/bootstrap.min.css";
import AllDataAPI from "./components/AllDataAPI";
import About from "./components/About";
import Products from "./components/Products";




function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />}></Route>
      <Route exact path="/about" element={<About />}></Route>

    </Routes>
    </BrowserRouter>
    
    
    
    
    
    </>
  );
}

export default App;
