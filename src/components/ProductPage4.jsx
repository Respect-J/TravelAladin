import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import axios from "axios";
import ScrollToTop from "./ScrollToTop";
import ContactBubble from "./ContactBubble";
import Testimonials2 from "./Testimonials2";
import Gallery from "./Gallery";
import { useLanguage } from "./LanguageContext";
import Accordion1 from "./Accordion1";
import Accordion2 from "./Accordion2";

const ProductPage4 = () => {
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
          "https://theeastcaravan.com/back/tours/api/tour/3/"
        );
        const data = response.data;

        setTourData(data.tour);
        setAccordionData(data.days);
        setComesOutData(data.comes_out);

        const parsedPrice = parseFloat(data.tour.price_for_one.replace("", ""));
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
                src={`https://theeastcaravan.com${tourData.mainimg}`}
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
              <div className="acors-container">
                <div className="acor1">
                  <div className="titleacor">
                    {language === "ru"
                      ? `Классический Тур по Узбекистану`
                      : `Classic Tour of Uzbekistan`}
                  </div>
                  <Accordion1 />
                </div>
                <div className="acor1">
                  <div className="titleacor">
                    {language === "ru"
                      ? `Винный Тур по Узбекистану`
                      : `Wine Tour of Uzbekistan`}
                  </div>
                  <Accordion2 />
                </div>
              </div>

              <div className="galleryall">
                <Gallery className="galleryall" />
              </div>
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
                    {accordionData.map((item, index) => (
                      <Accordion
                        key={index}
                        title={`${index + 1} ${
                          language === "ru" ? `День` : `Day`
                        }`}
                        content={
                          language === "ru"
                            ? item.description_ru
                            : item.description_en
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="product-price">
                <span>
                  {price !== null
                    ? `${
                        language === "ru"
                          ? `Цена за одного`
                          : `Price for one person`
                      }: ${
                        language === "ru"
                          ? `Стоимость тура зависит от выбранных городов и видов отдыха.`
                          : `The cost of the tour depends on the selected cities and types of recreation.`
                      }`
                    : translations && translations.loading}
                </span>
              </div>
              <div className="product-price">
                <span>
                  {price !== null
                    ? `${
                        language === "ru"
                          ? `Цена за двоих`
                          : `Price for two persons`
                      }: ${
                        language === "ru"
                          ? `Стоимость тура зависит от выбранных городов и видов отдыха.`
                          : `The cost of the tour depends on the selected cities and types of recreation.`
                      }`
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
      
      <Footer />
    </>
  );
};

export default ProductPage4;
