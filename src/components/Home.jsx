import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Recommend from "./Recommend";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import VerticalLinearStepper from "./VerticalLinearStepper";
import ContactBubble from "./ContactBubble";
import TourDate from "./TourDate";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <ContactBubble/>
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <ContactForm />
      <VerticalLinearStepper />
      <TourDate/>
      <Testimonials />
      <Gallery/>
      <Footer />
    </>
  );
};

export default Home;
