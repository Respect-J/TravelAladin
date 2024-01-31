import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import backgroundImg from "../assets/blog1.jpg";
import { useLanguage } from "./LanguageContext";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  padding: 60px;
  
`;

const StyledForm = styled.form`
  display: flex;
  max-width: 600px;
  min-width: 600px;

  flex-direction: column;
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 900px) {
    min-width: 300px;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;

  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = () => {

  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_va27djo",
        "template_hfajp25",
        e.target,
        "6i8wIIeeu78-xa4iR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="titlestop" id="contact">
      {language === 'ru' ? 'Обратная связь' : 'Contact Us'}
      </h2>
      <FormContainer id="contact">
        <a href="https://forms.amocrm.ru/rvzmlvv" className="cart-btn">
        {language === 'ru' ? 'Оставить заявку' : 'Submit Request'}
        </a>
      </FormContainer>
    </>
  );
};

export default ContactForm;
