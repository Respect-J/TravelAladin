import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/ava1.jpg";
import avatarImage2 from "../assets/ava2.jpg";
import avatarImage3 from "../assets/ava3.jpg";
import { useLanguage } from "./LanguageContext"; // Подставьте корректный путь к вашему LanguageContext

export default function Testimonials4() {
  const { language } = useLanguage();

  const testimonialsData = [
    {
      text:
        language === "ru"
          ? "The East Caravan – настоящие профессионалы в организации туров! Отличный баланс между экскурсиями и свободным временем. Удивительные города, вкусная еда, и, конечно же, заботливый персонал. Рекомендую!"
          : "The East Caravan are true professionals in organizing tours! Excellent balance between excursions and free time. Amazing cities, delicious food, and, of course, caring staff. Highly recommend!",
      author: language === "ru" ? "Елена Смирнова" : "Elena Smirnova",
    },
    {
      text:
        language === "ru"
          ? "Мы с семьей провели незабываемый отпуск в Узбекистане с The East Caravan. Профессиональные гиды рассказали нам много интересного о культуре и истории страны. Отличная организация от начала до конца. Спасибо за такой чудесный опыт!"
          : "My family and I had an unforgettable vacation in Uzbekistan with The East Caravan. Professional guides told us a lot about the culture and history of the country. Excellent organization from start to finish. Thank you for such a wonderful experience!",
      author: language === "ru" ? "Дмитрий Козлов" : "Dmitry Kozlov",
    },
    {
      text:
        language === "ru"
          ? "The East Caravan – лучший выбор для путешествия в Узбекистан! Прекрасно спланированный маршрут, удобные переезды, внимательные гиды. Особенно впечатлил Самарканд – город с величественной историей. Спасибо за незабываемое приключение!"
          : "The East Caravan is the best choice for traveling to Uzbekistan! Well-planned route, comfortable transfers, attentive guides. Samarkand, with its majestic history, was especially impressive. Thank you for an unforgettable adventure!",
      author: language === "ru" ? "Анна Лебедева" : "Anna Lebedeva",
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
