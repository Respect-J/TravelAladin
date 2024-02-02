import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import axios from "axios";
import ScrollToTop from "./ScrollToTop";
import ContactBubble from "./ContactBubble";
import Testimonials4 from "./Testimonials4";
import Gallery from "./Gallery";
import { useLanguage } from "./LanguageContext";
import Accordion1 from "./Accordion1";
import ImageCarousel from "./ImageCarousel";
import Testimonials from "./Testimonials";

const ProductPage = () => {
  const { translations, language } = useLanguage();
  const [accordionData, setAccordionData] = useState([]);
  const [tourData, setTourData] = useState({});
  const [comesOutData, setComesOutData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back.theeastcaravan.com/tours/api/tour/0/"
        );
        const data = response.data;

        setTourData(data.tour);
        setAccordionData(data.days);
        setComesOutData(data.comes_out);

        const parsedPrice = parseFloat(
          data.tour.price_for_one.replace("$", "")
        );
        setPrice(isNaN(parsedPrice) ? null : parsedPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
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
      <ScrollToTop />
      <ContactBubble />
      <main className="container">
        {loading ? (
          <p>
            {translations && translations.loading
              ? translations.loading
              : "Loading..."}
          </p>
        ) : (
          <>
            <div className="left-column">
              <img
                data-image="red"
                className="active"
                src={`https://back.theeastcaravan.com${tourData.mainimg}`}
                alt={tourData.title}
              />
              <br />
              <p className="inclusions-title">
                {translations && translations.included}
              </p>
              <ul className="inclusions-list">
                {comesOutData.map(({ id, description }) => (
                  <li key={id}>{description}</li>
                ))}
              </ul>
                
             
             
            </div>

            <div className="right-column">
              <div className="product-description">
                <span>{translations && translations.tour}</span>
                <h1>
                  {language === "ru" ? tourData.title_ru : tourData.title_en}
                </h1>
                <p>
                  {language === "ru"
                    ? tourData.description_ru
                    : tourData.description_en}
                </p>
              </div>

              <div className="product-configuration">
                <div>
                  <h2>{translations && translations.dayDescription}</h2>
                  <div className="accordion">
                    <Accordion1/>
                  </div>
                </div>
              </div>
              <span className="product-price" style={{fontSize: '20px', fontWeight: 'bold'}}>
              {language === "ru" ? "При группе 15 человек" : "For a group of 15 people"}

              </span>

              <div className="product-price">
                <span>
                  {price !== null
                    ? `${
                        language === "ru"
                          ? `Одноместное размещение`
                          : `Single occupancy`
                      }: ${tourData.price_for_one}$`
                    : translations && translations.loading}
                </span>
              </div>
              <div className="product-price">
                <span>
                  {price !== null
                    ? `${
                        language === "ru"
                          ? `Двухместное размещение`
                          : `Double occupancy`
                      }: ${tourData.price_for_two}$`
                    : translations && translations.loading}
                </span>
              </div>

              <a href="https://forms.amocrm.ru/rvzmlvv" className="cart-btn">
                {language === "ru" ? `Оставить заявку` : `Submit application`}
              </a>
            </div>
          </>
        )}
      </main>
      <ImageCarousel/>
      <Testimonials />
      {/* <div className="galleryall2">
        <Gallery className="galleryall" />
      </div> */}
      <Footer />
    </>
  );
};

export default ProductPage;
