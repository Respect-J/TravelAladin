import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/1.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { FaLanguage } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "./LanguageContext"; // Замените на путь к вашему контексту

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <Nav className="nav">
        <div className="brand">
          <a href="/">
            <div className="container2">
              <img src={logo} alt="" />
              {language === "ru" ? "The East Caravan" : "The East Caravan"}
            </div>
          </a>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
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
            <a href="https://theeastcaravan.com/#contact">{language === "ru" ? "Обратная связь" : "Contact"}</a>
          </li>
          <li>
            <a href="https://theeastcaravan.com/#testimonials">{language === "ru" ? "Отзывы" : "Testimonials"}</a>
          </li>
          <li>
            <a href="/about">{language === "ru" ? "О нас" : "About Us"}</a>
          </li>
        </ul>
        <span className="lang">
          <LanguageDropdown />
        </span>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="/" onClick={() => setNavbarState(false)}>
              {language === "ru" ? "Главная" : "Home"}
            </a>
          </li>
          <li>
            <a
              href="https://theeastcaravan.com/#services"
              onClick={() => setNavbarState(false)}
            >
              {language === "ru" ? "Города" : "Cities"}
            </a>
          </li>
          <li>
            <a
              href="https://theeastcaravan.com/#recommend"
              onClick={() => setNavbarState(false)}
            >
              {language === "ru" ? "Программы туров" : "Tour Programs"}
            </a>
          </li>
          <li>
            <a
              href="https://theeastcaravan.com/#testimonials"
              onClick={() => setNavbarState(false)}
            >
              {language === "ru" ? "Отзывы" : "Testimonials"}
            </a>
          </li>
          <li>
            <a
              href="https://theeastcaravan.com/#contact"
              onClick={() => setNavbarState(false)}
            >
              {language === "ru" ? "Обратная связь" : "Contact"}
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setNavbarState(false)}>
              {language === "ru" ? "О нас" : "About Us"}
            </a>
          </li>
          <li>
            <LanguageDropdown />
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 10px;
  .brand {
    .container2 {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.1rem;
      font-weight: 800;
      padding-left: 40px !important;
      text-transform: uppercase;
    }
    img {
      width: 75px;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1.2rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #000;
        font-size: 0.9rem;
        font-weight: 400;
        text-transform: uppercase;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
          font-size: 0.95rem;
        }
      }
      &:first-of-type {
        a {
          color: #000;
          font-weight: 400;
          &:hover {
            color: #023e8a;
            font-size: 0.95rem;
          }
        }
      }
    }
  }
  button {
    
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-right: 2rem;
      
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 10000000;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 60vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;

  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;
