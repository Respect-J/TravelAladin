import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import IMG from "../assets/IMG_5422.jpeg";

const About = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  // Функция для получения текста в зависимости от языка
  const getText = (ruText, enText) => (language === "ru" ? ruText : enText);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="empty"></div>
      <div className="about-section">
        <div className="inner-container">
          <h1>{getText("The East Caravan", "The East Caravan")}</h1>
          <p className="text">
          {getText(
              "Мы специализируемся на организации групповых и индивидуальных туров в Узбекистан. Мы предлагаем своим клиентам уникальный подход к каждому путешественнику, чтобы сделать его поездку незабываемой. The East Caravan может организовать для вас любое путешествие по вашему желанию и запросу. Если вы хотите отметить день рождения или провести свадебную поездку, то наша компания готова помочь вам создать самые яркие моменты. Мы команда профессионалов, знаем все лучшие места Узбекистана и можем предложить различные маршруты для вашего путешествия. Вы сможете выбрать из широкого спектра услуг: экскурсия, прогулка на верблюдах и конная прогулка через горы и долины и многое другое.. Ваш индивидуальный тур будет полностью адаптироваться к вашим потребностям и интересам. Каждый элемент программы будет продумываться до последней детали - от выбора достопримечательностей до ресторанных заведений для обедов.",
              "We specialize in organizing group and individual tours in Uzbekistan. We offer our clients a unique approach to each traveler to make their trip unforgettable. The East Caravan can organize any trip for you according to your desire and request. If you want to celebrate a birthday or go on a wedding trip, our company is ready to help you create the brightest moments. We are a team of professionals, we know all the best places in Uzbekistan and can offer various routes for your journey. You can choose from a wide range of services: excursions, camel rides, and horseback riding through mountains and valleys, and much more. Your individual tour will be fully adapted to your needs and interests. Every element of the program will be thought out to the last detail - from choosing attractions to restaurants for lunches."
            )}
          </p>
          <div className="skills">
          <span>{getText("Открой Восток", "Discover the East")}</span>
            <span>{getText("Путешествуй с удовольствием", "Travel with pleasure")}</span>
            <button className="download-button" onClick={openModal}>
              {getText("Скачать Лицензию", "Download License")}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <img src={IMG} alt="License" />
          </div>
        </div>
      )}

      <div className="empty"></div>
      <Footer />
    </>
  );
};

export default About;
