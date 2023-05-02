import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import up from "../img/up.svg"

function ScrollButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a onClick={handleClick} className='button_top'>
      <img src={up} width="20px"/>
    </a>
  );
}

export default ScrollButton;