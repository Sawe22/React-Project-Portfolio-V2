import React from 'react'
import './about.css'
import ME from '../../assets/p1.jpg'
import {GiDiploma} from 'react-icons/gi'
import {BiCertification} from 'react-icons/bi'
import {GoTools} from 'react-icons/go'



const About = () => {
  return (
    <section id="about">
      <h5>Quick facts about</h5>
      <h2>me</h2>

      <div className='container about__container'>

        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

          <article className='about__card'>
              <GiDiploma className='about__icon'/>
              <h5>Education</h5>
              <small>UBC: Computer Science + Math</small>
            </article>

            <article className='about__card'>
              <GiDiploma className='about__icon'/>
              <h5>Certifications</h5>
              <small>French B2 (Full Professional French Fluency)
                Dual Dogwood Diploma
              </small>
            </article>
            

            <article className='about__card'>
              <GoTools className='about__icon'/>
              <h5>Projects</h5>
              <small>6 completed</small>
            </article>

          </div>
           
           <p>
            Driven by curiosity.
           </p>

           <a href="#contacts" className='btn btn-primary '>Let's Talk</a>

        </div>
      
      </div>
    </section>
  )
}

export default About