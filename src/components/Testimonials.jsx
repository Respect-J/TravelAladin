import React from "react";
import styled from "styled-components";
import { useLanguage } from "./LanguageContext";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import avatarImage from "../assets/ava1.jpg";
import avatarImage2 from "../assets/ava2.jpg";
import avatarImage3 from "../assets/ava3.jpg";

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonialsData = [
    {
      text_ru: "Тур в Самарканд - это по правде удивительное путешествие с богатой историей, великолепной архитектурой и дружелюбным гидом. Организация тура была безупречной. Спасибо вам за поездку!",
      text_en: "Tour to Samarkand is truly an amazing journey with rich history, magnificent architecture, and a friendly guide. The tour organization was impeccable. Thank you for the trip!",
      author_ru: "Дмитрий Жигулёв",
      author_en: "Dmitry Zhigulev",
    },
    {
      text_ru: "В Узбекистане как будто своя атмосфера, история наяву! Мне очень понравилось участвовать в этом туре, мы посетили очень много достопримечательностей а так же насладились узбекской национальной кухней!",
      text_en: "In Uzbekistan, it feels like a unique atmosphere, history comes alive! I really enjoyed participating in this tour; we visited many landmarks and enjoyed Uzbek national cuisine!",
      author_ru: "Барановская Наталья",
      author_en: "Natalia Baranovskaya",
    },
    {
      text_ru: "Я и моя семья посетила Узбекистан. Нам очень понравилось, а особенно понравился исторический город Бухара своей древней архитектурой. У нас был очень опытный гид. Спасибо организаторам!",
      text_en: "My family and I visited Uzbekistan. We really enjoyed it, especially the historical city of Bukhara with its ancient architecture. We had a very experienced guide. Thanks to the organizers!",
      author_ru: "Мария Нагиева",
      author_en: "Maria Nagieva",
    },
    {
      text_ru: "Недавно вернулись из невероятного путешествия по Узбекистану с турфирмой \"The East Caravan\". Организация была на высшем уровне! Отличные экскурсии, приветливые гиды и потрясающие виды.!",
      text_en: "Recently returned from an incredible journey through Uzbekistan with \"The East Caravan\" tour company. The organization was top-notch! Excellent excursions, friendly guides, and breathtaking views!",
      author_ru: "Анна Иванова",
      author_en: "Anna Ivanova",
    },
    {
      text_ru: "Отпуск в Узбекистане с The East Caravan был невероятным! Отличная организация маршрута, внимательные гиды, уютные гостиницы. Особенно впечатлил Хива и его древние улочки. Спасибо за незабываемые впечатления!",
      text_en: "The vacation in Uzbekistan with The East Caravan was incredible! Excellent route organization, attentive guides, comfortable hotels. Khiva and its ancient streets were particularly impressive. Thank you for unforgettable impressions!",
      author_ru: "Наталья Петрова",
      author_en: "Natalia Petrova",
    },
    {
      text_ru: "Путешествие с The East Caravan оставило самые яркие воспоминания! Замечательная команда, которая заботится о каждой детали. Узбекистан – это настоящая жемчужина Средней Азии.",
      text_en: "The journey with The East Caravan left the brightest memories! A wonderful team that takes care of every detail. Uzbekistan is a true gem of Central Asia, and thanks to this company.",
      author_ru: "Александр Иванов",
      author_en: "Alexander Ivanov",
    },
  ];

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <Section id="testimonials">
      <div className="title">
        <h2>{language === "ru" ? "Отзывы" : "Testimonials"}</h2>
      </div>
      <div className="testimonials-carousel">
        <AliceCarousel
          mouseTracking
          autoPlayInterval={2000}
          autoPlay
          infinite
          responsive={responsive}
          items={testimonialsData.map((testimonial, index) => (
            <div key={index} className="carousel-item">
              <div className="testimonial">
                <p>{language === "ru" ? testimonial.text_ru : testimonial.text_en}</p>
                <div className="info">
                  
                  <div className="details">
                    <h4>{language === "ru" ? testimonial.author_ru : testimonial.author_en}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 3rem 1rem;
  
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .testimonials-carousel {
    margin: 0 auto;
    width: 80%; /* Set the desired width for the carousel */
  }

  .carousel-item {
    width: 100%;
    margin-right: 20px;
  }

  .testimonial {
    background-color: aliceblue;
    padding: 2rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: rgb(196, 217, 235);
    }

    .info {
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      margin-top: 1rem;

      img {
        object-fit: cover;
        border-radius: 3rem;
        height: 3rem;
      }

      .details {
        span {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .testimonials-carousel {
      display: flex;
      justify-content: space-between;
      overflow: hidden;

      .carousel-item {
        flex: 0 0 calc(50% - 10px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .testimonials-carousel {
      .carousel-item {
        margin-right: 0;
      }
    }
  }
`;
