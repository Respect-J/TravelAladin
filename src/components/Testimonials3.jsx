import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/ava1.jpg";
import avatarImage2 from "../assets/ava2.jpg";
import avatarImage3 from "../assets/ava3.jpg";
import { useLanguage } from "./LanguageContext"; // Подставьте корректный путь к вашему LanguageContext

export default function Testimonials3() {
  const { language } = useLanguage();

  const testimonialsData = [
    {
      text: language === "ru" ? "Недавно вернулись из невероятного путешествия по Узбекистану с турфирмой \"The East Caravan\". Организация была на высшем уровне! Отличные экскурсии, приветливые гиды и потрясающие виды. Спасибо за незабываемый опыт!" : "Recently returned from an incredible journey through Uzbekistan with \"The East Caravan\" tour company. The organization was top-notch! Excellent excursions, friendly guides, and breathtaking views. Thank you for an unforgettable experience!",
      author: language === "ru" ? "Анна Иванова" : "Anna Ivanova",
    },
    {
      text: language === "ru" ? "Отпуск в Узбекистане с The East Caravan был невероятным! Отличная организация маршрута, внимательные гиды, уютные гостиницы. Особенно впечатлил Хива и его древние улочки. Спасибо за незабываемые впечатления!" : "The vacation in Uzbekistan with The East Caravan was incredible! Excellent route organization, attentive guides, comfortable hotels. Khiva and its ancient streets were particularly impressive. Thank you for unforgettable impressions!",
      author: language === "ru" ? "Наталья Петрова" : "Natalia Petrova",
    },
    {
      text: language === "ru" ? "Путешествие с The East Caravan оставило самые яркие воспоминания! Замечательная команда, которая заботится о каждой детали. Узбекистан – это настоящая жемчужина Средней Азии, и благодаря этой фирме мы смогли полностью насладиться его красотой." : "The journey with The East Caravan left the brightest memories! A wonderful team that takes care of every detail. Uzbekistan is a true gem of Central Asia, and thanks to this company, we were able to fully enjoy its beauty.",
      author: language === "ru" ? "Александр Иванов" : "Alexander Ivanov",
    },
  ];

  return (
    <Section id="testimonials">
      <div className="title">
        <h2>{language === "ru" ? "Отзывы" : "Testimonials"}</h2>
      </div>
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>{testimonial.text}</p>
            <div className="info">
              <img src="" alt="" /> {/* Подставьте путь к вашему изображению */}
              <div className="details">
                <h4>{testimonial.author}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
margin: 1rem 2rem;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          fit-content: cover;
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
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
