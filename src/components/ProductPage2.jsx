import React, { useState, useEffect } from "react";
import Img from "../assets/blog1.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import axios from "axios";
import ScrollToTop from "./ScrollToTop";
import ContactBubble from "./ContactBubble";
import Testimonials2 from "./Testimonials2";

const ProductPage2 = () => {
  const [accordionData, setAccordionData] = useState([]);
  const [tourData, setTourData] = useState({});
  const [comesOutData, setComesOutData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [price, setPrice] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/tours/api/tour/1/"
        );
        const data = response.data;

        setTourData(data.tour);
        setAccordionData(data.days);
        setComesOutData(data.comes_out);

        const parsedPrice = parseFloat(data.tour.price.replace("$", ""));
        setPrice(isNaN(parsedPrice) ? null : parsedPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <ContactBubble/>
      <main className="container">
        <div className="left-column">
          <img
            data-image="red"
            className="active"
            src={`http://127.0.0.1:8000${tourData.mainimg}`} // Assuming 'mainimg' is the field containing the image path
            alt={tourData.title}
          />
          <br />
          <p className="inclusions-title">Что входит в стоимость:</p>
          <ul className="inclusions-list">
            {comesOutData.map(({ id, description }) => (
              <li key={id}>{description}</li>
            ))}
          </ul>
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>Тур</span>
            <h1>{tourData.title}</h1>
            <p>{tourData.description}</p>
          </div>

          <div className="product-configuration">
            <div>
              <h2>Описание по дням</h2>
              <div className="accordion">
                {accordionData.map((data, index) => (
                  <Accordion
                    key={index}
                    title={`${index + 1} День`}
                    content={data.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="product-price">
          <span>{price !== null ? `Цена на 1 человека: ${price}$` : "Loading..."}</span>
          </div>
          <div className="product-price">
          <span className="">{price !== null ? `Цена на 2 человека: ${price}$` : "Loading..."}</span>
          </div>
            <a href="https://forms.amocrm.ru/rvzmlvv" className="cart-btn">
              Оставить заявку
            </a>
        </div>
      </main>
      <Testimonials2/>
      <Footer />
    </>
  );
};

export default ProductPage2;
