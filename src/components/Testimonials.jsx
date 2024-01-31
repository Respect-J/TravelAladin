import React from "react";
import styled from "styled-components";
import { useLanguage } from "./LanguageContext"; // Замените на путь к вашему контексту
import avatarImage from "../assets/ava1.jpg";
import avatarImage2 from "../assets/ava2.jpg";
import avatarImage3 from "../assets/ava3.jpg";

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonialsData = [
    {
      text_ru:
        "Тур в Самарканд - это по правде удивительное путешествие с богатой историей, великолепной архитектурой и дружелюбным гидом. Организация тура была безупречной. Спасибо вам за поездку!",
      text_en:
        "Tour to Samarkand is truly an amazing journey with a rich history, magnificent architecture, and a friendly guide. The organization of the tour was impeccable. Thank you for the trip!",
      author_ru: "Ян Дмитрий",
      author_en: "John Doe",
    },
    {
      text_ru:
        "В Узбекистане как будто своя атмосфера, история наяву! Мне очень понравилось участвовать в этом туре, мы посетили очень много достопримечательностей а так же насладились узбекской национальной кухней, это просто что то с чем то, словами не передать!",
      text_en:
        "In Uzbekistan, it's like its own atmosphere, history comes to life! I really enjoyed participating in this tour, we visited many landmarks and also enjoyed Uzbek national cuisine, it's just something else, words can't describe!",
      author_ru: "Наталья Итальянцева",
      author_en: "Natalie Italian",
    },
    {
      text_ru:
        "Я и моя семья посетила Узбекистан. Нам очень понравилось, а особенно понравился исторический город Бухара своей древней архитектурой. У нас был очень опытный гид. Спасибо организаторам!",
      text_en:
        "My family and I visited Uzbekistan. We really liked it, especially the historical city of Bukhara with its ancient architecture. We had a very experienced guide. Thanks to the organizers!",
      author_ru: "Елена Сабо",
      author_en: "Elena Sabo",
    },
  ];

  return (
    <Section id="testimonials">
      <div className="title">
        <h2>{language === "ru" ? "Отзывы" : "Testimonials"}</h2>
      </div>
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{language === "ru" ? testimonial.text_ru : testimonial.text_en}</p>
            <div className="info">
              <img
                src={index === 0 ? avatarImage : index === 1 ? avatarImage2 : avatarImage3}
                alt=""
              />
              <div className="details">
                <h4>{language === "ru" ? testimonial.author_ru : testimonial.author_en}</h4>
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
          fit-content:cover;
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
