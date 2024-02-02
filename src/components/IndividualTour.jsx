import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const IndividualTour = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleClick = () => {
    // Перенаправление на /product4/
    navigate("/product4/");
  };

  const dayText = language === "ru" ? "Индивидуальный Тур" : "Individual Tour";
  const moreDetailsText = language === "ru" ? "Подробнее" : "More Details";

  return (
    <div id="individ">
      <h2 className="titlestop">{language === "ru" ? "Индивидуальный Тур" : "Individual Tour"}</h2>

      <div class="card2">
        <div class="top-section">
          <div class="border"></div>
          <div class="icons">

          </div>
        </div>
        <div className="bottom-section">
          <span className="title">
            {language === "ru" ? "Индивидуальный Тур" : "Individual Tour"}
          </span>
          <div className="row row1">
            <div className="item">
              <button className="shadow__btn" onClick={handleClick}>
                {moreDetailsText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTour;
