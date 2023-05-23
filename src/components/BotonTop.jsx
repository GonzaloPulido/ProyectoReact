import React, { useState, useEffect } from 'react'
import up from "../img/up.svg"


function ScrollButton() {
  const [showButton, setShowButton] = useState(false)

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 600) {  
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    showButton && (
      <a onClick={handleClick} className='button_top'>
        <img src={up} width="20px"/>
      </a>
    )
  )
}

export default ScrollButton
