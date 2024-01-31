import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/ava1.jpg";
import avatarImage2 from "../assets/ava2.jpg";
import avatarImage3 from "../assets/ava3.jpg";
import { useLanguage } from "./LanguageContext"; // Подставьте корректный путь к вашему LanguageContext

export default function Testimonials2() {
  const { language } = useLanguage();

  const testimonialsData = [
    {
      text: language === "ru" ? "Тур в Самарканд - это по правде удивительное путешествие с богатой историей, великолепной архитектурой и дружелюбным гидом. Организация тура была безупречной. Спасибо вам за поездку!" : "Tour to Samarkand is truly an amazing journey with rich history, magnificent architecture, and a friendly guide. The tour organization was impeccable. Thank you for the trip!",
      author: language === "ru" ? "Дмитрий Жигулёв" : "Dmitry Zhigulev",
    },
    {
      text: language === "ru" ? "В Узбекистане как будто своя атмосфера, история наяву! Мне очень понравилось участвовать в этом туре, мы посетили очень много достопримечательностей а так же насладились узбекской национальной кухней, это просто что то с чем то, словами не передать!" : "In Uzbekistan, it feels like a unique atmosphere, history comes alive! I really enjoyed participating in this tour; we visited many landmarks and enjoyed Uzbek national cuisine. It's something beyond words!",
      author: language === "ru" ? "Барановская Наталья" : "Natalia Baranovskaya",
    },
    {
      text: language === "ru" ? "Я и моя семья посетила Узбекистан. Нам очень понравилось, а особенно понравился исторический город Бухара своей древней архитектурой. У нас был очень опытный гид. Спасибо организаторам!" : "My family and I visited Uzbekistan. We really enjoyed it, especially the historical city of Bukhara with its ancient architecture. We had a very experienced guide. Thanks to the organizers!",
      author: language === "ru" ? "Мария Нагиева" : "Maria Nagieva",
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
