import React from 'react'
import './nav.css'
import {HiOutlineHome} from "react-icons/hi"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {AiOutlineFileDone} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {useState} from "react"



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}>
      <HiOutlineHome/>
      </a>
      <a href="#about"
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}>
      <AiOutlineUser/>
      </a>
      <a href="#experience"
      onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}>
      <BiBook/>
      </a>
      <a href="#portfolio"
      onClick={() => setActiveNav('#portfolio')}
      className={activeNav === '#portfolio' ? 'active' : ''}>
      <AiOutlineFileDone/>
      </a>
      <a href="#contacts"
      onClick={() => setActiveNav('#contacts')}
      className={activeNav === '#contacts' ? 'active' : ''}>
      <AiOutlineMessage/>
      </a>
    </nav>
  )
}

export default Nav