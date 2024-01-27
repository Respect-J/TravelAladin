import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import ContactForm from "./components/ContactForm";
import VerticalLinearStepper from "./components/VerticalLinearStepper";
import Soon from "./components/Soon";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import About from './components/About'
import ProductPage2 from "./components/ProductPage2";
import ProductPage3 from "./components/ProductPage3";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "10px",
      duration: 800,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #steps,
        #testimonials,
        footer,
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/soon' element={<Soon/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product2' element={<ProductPage2/>}/>
        <Route path='/product3' element={<ProductPage3/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  );
}
