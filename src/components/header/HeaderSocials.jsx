import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/baqar-abbas-9b74aa200/" target="_blank">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/sawe22" target="_blank">
            <BsGithub/>
        </a>
        <a href="https://linkedin.com" target="_blank"></a>
    </div>
  )
}

export default HeaderSocials
