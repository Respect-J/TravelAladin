import React from "react";
import styled from "styled-components";
import {
  BsLinkedin,
  BsFacebook,
  BsTelegram,
  BsMailbox,
  BsMailbox2,
} from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { useLanguage } from "./LanguageContext"; // Замените на путь к вашему контексту

export default function Footer() {
  const { language } = useLanguage();

  return (
    <FooterContainer>
      <span>
        {language === "ru" ? "Carpet Travel Aladin. Все права защищены" : "Carpet Travel Aladin. All rights reserved"}
      </span>
      <ul className="links">
        <li>
          <a href="/">{language === "ru" ? "Главная" : "Home"}</a>
        </li>
        <li>
          <a href="https://theeastcaravan.com/#services">{language === "ru" ? "Города" : "Cities"}</a>
        </li>
        <li>
          <a href="https://theeastcaravan.com/#recommend">{language === "ru" ? "Программы туров" : "Tour Programs"}</a>
        </li>
        <li>
          <a href="https://theeastcaravan.com/#contact">{language === "ru" ? "Обратная связь" : "Contact Us"}</a>
        </li>
        <li>
          <a href="https://theeastcaravan.com/#testimonials">{language === "ru" ? "Отзывы" : "Testimonials"}</a>
        </li>
        <li>
          <a href="/about">{language === "ru" ? "О нас" : "About Us"}</a>
        </li>
        <li>
          <a href="tel:+79771451253">+79771451253</a>
        </li>
        <li>
          <a href="tel:+998505080939">+998505080939</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <a href="https://www.facebook.com/theeastcaravan">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="https://t.me/eastcaravan">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="https://t.me/eastcaravan">
            <BsTelegram />
          </a>
        </li>
        <li>
          <a href="mailto:eastcaravantravel@gmail.com">
            <SiMaildotru />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+998505080939">
            <IoLogoWhatsapp />
          </a>
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
margin: 1rem 2rem;
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
