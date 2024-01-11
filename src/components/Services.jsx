import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import IMG from "../assets/Destination1.png";

export default function Services() {
  const data = [
    {
      icon: IMG,
      title: "Ташкент",
      subTitle:
        "Ташкент – один из крупнейших городов Центральной Азии, столица суверенной Республики Узбекистан. Город расположен в предгорьях Тянь-Шаньского хребта, в долинной пойме реки Чирчик. В хорошую погоду горы видны из города на северо-восточном горизонте.А",
    },
    {
      icon: IMG,
      title: "Самарканд",
      subTitle:
        "Самарканд – один из древнейших городов Средней Азии, уютно расположившийся в цветущей долине реки Зеравшан. Он входит в тройку самых крупных и многонаселенных городов Узбекистана, уступая пальму первенства лишь столичному Ташкенту и Намангану. На протяжении веков Самарканд являлся ключевым пунктом Великого шелкового пути и служил перекрестком культур Востока и Запада.",
    },
    {
      icon: IMG,
      title: "Бухара",
      subTitle:
        "Бухара - это один из древнейших городов Центральной Азии, расположенный в Узбекистане. Он является административным центром Бухарской области и сохранил уникальные памятники зодчества всех исторических эпох, начиная с IX века. Бухара была столицей Бухарского ханства, крупным городом государства Тимуридов, также была столицей разных правящих династий.",
    },
    {
      icon: IMG,
      title: "Хива",
      subTitle:
        "Хиве около 2500 лет. Сегодня это самый колоритный город Узбекистана: здесь появляется ощущение, что вас впустили в реальность Аладдина или Шахерезады. За высокими стенами прячется настоящий глиняный лабиринт с потайными дверями, и только здесь есть необычный «короткий минарет» — Кальта-минар, ставший символом города. Большинство объектов старой Хивы внесены ЮНЕСКО в список объектов всемирного наследия человечества.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
