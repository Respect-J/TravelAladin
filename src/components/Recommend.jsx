import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLanguage } from "./LanguageContext";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import ProductPage from "./ProductPage";
import Loader from "./Loader";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title_ru: "Классический Тур По Узбекистану",
      subTitle_ru: "На 8 ДНЕЙ 7 НОЧЕЙ Тур По Городам Ташкент-Самарканд-Бухара",
      title_en: "Classic Tour of Uzbekistan",
      subTitle_en: "8 Days 7 Nights Tour to Tashkent-Samarkand-Bukhara",
      cost: "38,800",
      duration: "Approx 2-night trip",
      link: "/product/",
    },
    {
      image: Destination2,
      title_ru: "Винный Тур по Узбекистану",
      subTitle_ru: "На 8 ДНЕЙ 7 НОЧЕЙ Тур По Городам Ташкент-Самарканд-Бухара",
      title_en: "Wine Tour of Uzbekistan",
      subTitle_en: "8 Days 7 Nights Tour to Tashkent-Samarkand-Bukhara",
      cost: "54,200",
      duration: "Approx 2-night trip",
      link: "/product2/",
    },
    {
      image: Destination4,
      title_ru: "Индивидуальный Тур по Узбекистану",
      subTitle_ru: "Тур По Городам Узбекистана по желанию и выбору туриста",
      title_en: "Individual Tour of Uzbekistan",
      subTitle_en:
        "Tour to the Cities of Uzbekistan at the request and choice of the tourist",
      cost: "45,500",
      duration: "Approx 2-night trip",
      link: "/product4/",
    },
    {
      image: Destination5,
      title_ru: "Бизнес Тур",
      subTitle_ru: "Тур По Городам Узбекистана по желанию и выбору туриста",
      title_en: "Bussines Tour of Uzbekistan",
      subTitle_en: "8 Days 7 Nights Tour to Tashkent-Samarkand-Bukhara",
      cost: "45,500",
      duration: "Approx 2-night trip",
      link: "/product3/",
    },
  ];

  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const [title, setTitle] = useState(
    language === "ru" ? data[0].title_ru : data[0].title_en
  );
  const [subTitle, setSubTitle] = useState(
    language === "ru" ? data[0].subTitle_ru : data[0].subTitle_en
  );

  const items = data.map((destination) => ({
    image: destination.image,
    title_ru: destination.title_ru,
    subTitle_ru: destination.subTitle_ru,
    title_en: destination.title_en,
    subTitle_en: destination.subTitle_en,
    link: destination.link,
  }));

  useEffect(() => {
    const currentIndex = 0; // You can set the initial index based on your requirements
    setTitle(
      language === "ru"
        ? data[currentIndex].title_ru
        : data[currentIndex].title_en
    );
    setSubTitle(
      language === "ru"
        ? data[currentIndex].subTitle_ru
        : data[currentIndex].subTitle_en
    );
   

    
  }, [language]);

 

  const handleCardChange = (index) => {
    setTitle(language === "ru" ? data[index].title_ru : data[index].title_en);
    setSubTitle(
      language === "ru" ? data[index].subTitle_ru : data[index].subTitle_en
    );
  };

  
  const Card = (props) => {
    const { image, title, subTitle, link, onChange } = props;
    const navigate = useNavigate();

    const handleDetailsClick = () => {
      navigate(link);
      onChange(); // Call the parent's onChange to update the title and subtitle
    };

    return (
      <li className="card">
        <img src={image} alt={title} className="cardimg" />
        <p>{title}</p>
        <p>{subTitle}</p>
        <a href={handleDetailsClick} onClick={handleDetailsClick}>
          <button className="cardbut" onClick={handleDetailsClick}>
            {language === "ru" ? "Подробнее" : "Details"}
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
  }, [carouselItems, language]);

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
      <h2 className="titlestop" id="recommend">
        {language === "ru" ? "Программы туров" : "Tour Programs"}
      </h2>

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
              title={language === "ru" ? t.title_ru : t.title_en} // Используйте данные из массива data
              subTitle={language === "ru" ? t.subTitle_ru : t.subTitle_en} // Используйте данные из массива data
              link={t.link}
              onChange={() => handleCardChange(index)}
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
