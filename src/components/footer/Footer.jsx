import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Baqar Abbas</a>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contacts">Contact</a></li>
      </ul>
      
    </footer>
  )
}

export default Footer