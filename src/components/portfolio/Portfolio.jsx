import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import PROJ3 from '../../assets/proj3.jar'
import PROJ5 from '../../assets/2PlayerShooter.zip'
import PROJ4 from '../../assets/SurvivalShooter.zip'
import PROJ2 from '../../assets/WebcamCatFinder.zip'



const data = [
  {
    id: 1,
    image: IMG1,
    title: "Personal Portfolio Website",
    github: "https://github.com",
    demo: "self link"
  },
  {
    id: 4,
    image: IMG4,
    title: "Space Invaders Survival",
    github: "https://github.com",
    demo: PROJ4
  },
  {
    id: 3,
    image: IMG3,
    title: "Custom Study Spacer",
    github: "https://github.com",
    demo: PROJ3
  },
  {
    id: 2,
    image: IMG2,
    title: "Webcam Cat Face Detector",
    github: "https://github.com",
    demo: PROJ2
  },
  {
    id: 5,
    image: IMG5,
    title: "Two Player Shooter",
    github: "https://github.com",
    demo: PROJ5
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Here Is My</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key = {id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Open Project</a>
          </div>
        </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio