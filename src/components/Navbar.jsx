import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container2">
            <img src={logo} alt="" />
            East Caravan
          </div>
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
            <a href="/">Главная</a>
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
            <a href="#testimonials">Отзывы</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
        </ul>
        <span></span>
        <span></span>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
            Главная
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
            Города
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
            Программы туров
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
            Отзывы
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setNavbarState(false)}>
            Обратная связь
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setNavbarState(false)}>
             О нас
            </a>
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
  .brand {
    
    .container2 {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.1rem;
      font-weight: 800;
      text-transform: uppercase;
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
    padding: 0.5rem 1rem;
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
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 45vh;
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
