import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook, BsTelegram, BsMailbox, BsMailbox2 } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2024 Carpet Travel Aladin. All rights reserved</span>
      <ul className="links">
      <li>
            <a href="#home">Главная</a>
          </li>
          <li>
            <a href="#services">Города</a>
          </li>
          <li>
            <a href="#recommend">Программы туров</a>
          </li>
          <li>
            <a href="#contact">Обратная связь</a>
          </li>
          <li>
            <a href="#testimonials">Фото отчёты</a>
          </li>
          <li>
            <a href="#testimonials">Отзывы</a>
          </li>
          <li>
            <a href="#testimonials">О нас</a>
          </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsTelegram />
        </li>
        <li>
        <SiMaildotru />
        </li>
        <li>
        <IoLogoWhatsapp />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
