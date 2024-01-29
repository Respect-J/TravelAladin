import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/ava1.jpg";
import avatarImage2 from "../assets/ava2.jpg";
import avatarImage3 from "../assets/ava3.jpg";
export default function Testimonials2() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Отзывы</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Тур в Самарканд - это по правде удивительное путешествие с богатой
            историей, великолепной архитектурой и дружелюбным гидом. Организация
            тура была безупречной. Спасибо вам за поездку!
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Ян Дмитрий</h4>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            В Узбекистане как будто своя атмосфера, история наяву! Мне очень
            понравилось участвовать в этом туре, мы посетили очень много
            достопримечательностей а так же насладились узбекской национальной
            кухней, это просто что то с чем то, словами не передать!
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Наталья Итальянцева</h4>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Я и моя семья посетила Узбекистан. Нам очень понравилось, а особенно
            понравился исторический город Бухара своей древней архитектурой. У
            нас был очень опытный гид. Спасибо организаторам!
          </p>
          <div className="info">
            <img src={avatarImage3} alt="" />
            <div className="details">
              <h4>Елена Сабо</h4>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
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
