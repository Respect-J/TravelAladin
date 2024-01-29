import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import ProductPage from "./ProductPage";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Классический Тур По Узбекистану",
      subTitle:
        "На 8 ДНЕЙ 7 НОЧЕЙ Тур По Городам Ташкент-Самарканд-Бухара",
      cost: "38,800",
      duration: "Approx 2-night trip",
      link: "/product/",
    },
    {
      image: Destination2,
      title: "Винный Тур по Узбекистану",
      subTitle:
        " На 8 ДНЕЙ 7 НОЧЕЙ Тур По Городам Ташкент-Самарканд-Бухара",
      cost: "54,200",
      duration: "Approx 2-night trip",
      link: "/product2/",
    },
    {
      image: Destination4,
      title: "Индивидуальный Тур по Узбекистану",
      subTitle: "Тур По Городам Узбекистана по желанию и выбору туриста",
      cost: "45,500",
      duration: "Approx 2-night trip",
      link: "/product3/",
    },
    {
      image: Destination5,
      title: "Бизнес Тур",
      subTitle: "Тур По Городам Узбекистана по желанию и выбору туриста",
      cost: "45,500",
      duration: "Approx 2-night trip",
      link: "/",
    },
  ];

  const items = data.map((destination) => ({
    image: destination.image,
    copy: destination.title,
    subTitle: destination.subTitle,
    link: destination.link,
  }));

  const Card = (props) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
      navigate(props.link);
    };

    return (
      
      <li className="card">
        <img src={props.image} alt={props.copy} className="cardimg" />
        <p>{props.copy}</p>
        <p>{props.subTitle}</p>
        <a href={handleDetailsClick} onClick={handleDetailsClick}>
          <button className="cardbut" onClick={handleDetailsClick}>
            Подробнее
          </button>
        </a>
      </li>
    );
  };

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);

  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
<>

    <h2 className="titlestop"  id="recommend">Программы туров</h2>

    <div className="carouselwrapper module-wrapper" id="recommend">
      <div className="ui">
        <button onClick={() => setMoveClass("next")} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass("prev")} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {carouselItems.map((t, index) => (
          <Card
            key={t.copy + index}
            image={t.image}
            copy={t.copy}
            subTitle={t.subTitle}
            link={t.link}
          />
        ))}
      </ul>
    </div>
    </>

  );
}
const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
 
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        &:hover {
          transform: scale(1.05, 1.05) !important;
        }
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
