// LanguageDropdown.js
import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { useLanguage } from './LanguageContext';


const LanguageDropdown = () => {
  const { language, handleLanguageChange } = useLanguage();

  return (
    <div className="language-dropdown">
      <button className="dropdown-button">
        {language === 'en' ? 'English' : 'Русский'}
        <FiChevronDown className="chevron-icon" />
      </button>
      <div className="dropdown-content">
        <button onClick={() => handleLanguageChange('en')}>Eng</button>
        <button onClick={() => handleLanguageChange('ru')}>Рус</button>
      </div>
    </div>
  );
};
export default LanguageDropdown;
