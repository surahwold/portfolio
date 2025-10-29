import React from 'react'
import './About.css'
import picdev from '../../assets/picdev.jpg'
import Myself from '../../assets/Myself.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
          <div className='about-left'>
             <img src={Myself} alt='' className='picdev'/>
            </div>
            <div className='about-right'>
              <div className="about-para">
                <p> I am an experienced Frontend Developer with over 1 year of experience. Throughout my career, I’ve had the privilege of collaborating with several organizations as an intern, contributing to their success and growth. In addition to my frontend expertise, I possess strong skills in UI/UX design and graphic design, enabling me to create visually appealing, user-centered, and engaging digital experiences.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
              </div>
              <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React.js</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
              </div>
            </div>
           </div>
            <div className="about-achievements">
              <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
              <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
              </div>
            
              
            </div>
          </div>

          
   
  )
}

export default About
