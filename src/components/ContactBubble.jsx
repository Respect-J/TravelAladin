import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/Telegram_logo.svg.png";

export default function ContactBubble() {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };

  const openTelegram = () => {
    // Замените "your_username" на ваш никнейм в Телеграме или полный URL, если вы используете бота.
    window.location.href = "https://t.me/lil_nurik";
  };

  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });

  return (
    <ContactButton onClick={openTelegram} scrollState={scrollState}>
      <img src={logo} alt="" />
    </ContactButton>
  );
}

const ContactButton = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  left: 2rem;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  background-color: #1900ff39;
  padding: 1rem;
`;
