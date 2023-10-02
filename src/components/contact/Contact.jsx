import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiPhoneOutgoing} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from "emailjs-com"


const Contact = () => { 

  /*Code copied from emailjs-com below*/
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b9e8b8d', 'template_ii1vgjq', form.current, '2riqO2CzsYgKz5Pk1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      
  };
  /*Code copied from emailjs-com above*/
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>s.baqarmabbas@gmail.com</h5>
          <a href="mailto:supremeoverloard10104@gmail.com" target='_blank'>Send A Message</a>
        </article>

        <article className="contact__option">
          <FiPhoneOutgoing className='contact__option-icon'/>
          <h4>Cell Phone</h4>
          <h5>+236-979-2243</h5>
          <a href="tel:+2369792243" target='_blank'>Call Now</a>
        </article>
        </div>

        {/*End of contact options*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='sumbit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
     </section>
  )
}

export default Contact