import React, { useState, useEffect } from "react";
import { useLanguage } from './LanguageContext' // Замените на путь к вашему контексту

const TourDate = () => {
  const { language } = useLanguage();
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    const fetchTourDates = async () => {
      try {
        const response = await fetch("https://back.theeastcaravan.com/tours/date/");
        const data = await response.json();

        // Выбираем правильные поля для соответствующего языка
        const dateField = language === "en" ? "day_en" : "day_ru";

        const formattedDates = data.map((item) => item[dateField]);
        setTourDates(formattedDates);
      } catch (error) {
        console.error("Error fetching tour dates:", error);
      }
    };

    fetchTourDates();
  }, [language]);

  return (
    <>
      <h2 className="titlestop" id="datetour">
        {language === "en" ? "Tour Dates" : "Даты туров"}
      </h2>
      <div className="container3">
        <div className="classic">
        <div className="titletour">
        {language === "ru" ? "Классический тур по Узбекистану" : "Classic Tour in Uzbekistan"}
        </div>
          <ul className="daytour">
            {tourDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
          <a href="https://forms.amocrm.ru/rvzmlvv" className="cart-btn" id="btn-tour">
            {language === "en" ? "Submit Application" : "Оставить заявку"}
          </a>
        </div>
        <div className="wine">
        <div className="titletour">
        {language === "ru" ? "Винный тур по Узбекистану" : "Wine tour in Uzbekistan"}
        </div>
          <ul className="daytour">
            {tourDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
          <a href="https://forms.amocrm.ru/rvzmlvv" className="cart-btn" id="btn-tour">
            {language === "en" ? "Submit Application" : "Оставить заявку"}
          </a>
        </div>
      </div>
    </>
  );
};

export default TourDate;
