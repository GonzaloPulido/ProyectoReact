import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ScrollButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a onClick={handleClick} className='button_top'>
      <FontAwesomeIcon icon="fa-regular fa-arrow-up-to-line"/>
      UP
    </a>
  );
}

export default ScrollButton;