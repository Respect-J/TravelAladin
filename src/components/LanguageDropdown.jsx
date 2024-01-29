// LanguageDropdown.js
import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';


const LanguageDropdown = () => {
  const [language, setLanguage] = useState('ru'); // Default language

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Дополнительная логика для обновления языка в вашем приложении
  };

  return (
    <div className="language-dropdown">
      <button className="dropdown-button">
        {/* <FaGlobe className="globe-icon" /> */}
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
