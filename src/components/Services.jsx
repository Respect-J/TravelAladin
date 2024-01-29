import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/countre/");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleServiceClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <>
      <h2 className="titlestop" id="services">
        Города
      </h2>
      <Section id="services">
        {data.map((service, index) => {
          return (
            <div className="service" key={index}>
              <div className="icon" onClick={() => handleServiceClick(index)}>
                <img src={service.img} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p className="hidetit">{service.description}</p>

              {selectedService === index && <p>{service.description}</p>}
              {/* Render button only in mobile version */}
              <ButtonMobile onClick={() => handleServiceClick(index)}>
                Подробнее
              </ButtonMobile>
            </div>
          );
        })}
      </Section>
    </>
  );
}

const Section = styled.section`
  margin: 1rem 2rem;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 15px;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: translateX(0rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        width: 100%;
        transition: 0.3s ease-in-out;
        &:hover {
          transform: scale(1.05, 1.05);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-top: -0px !important;
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ButtonMobile = styled(Button)`
  display: none; // Hide button by default

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: inline-block; // Show button for screen width between 280px and 1080px
  }
`;
