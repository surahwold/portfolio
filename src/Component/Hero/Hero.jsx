/* import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt='' className='profile'/>
      <h1><span>I'm Surafel H/wold</span>, frontend developer based in Ethiopia. </h1>
      <p>I am a frontend developer from Addis Ababa, Ethiopia with 1 year of experience.</p>
      <div className='hero-action'></div>
      <div className='hero-connect'> <Link className='anchor-link' to='contact' smooth={true} duration={500} offset={50}>
                              <p onClick={() => setMenu("contact")}></p>
                          Connect with me</Link></div>
      <div className="hero-resume">My Resume</div>
    </div>
  )
}

export default Hero */



import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt='' className='profile'/>
      <h1><span>I'm Surafel H/wold</span>, frontend developer based in Ethiopia. </h1>
      <p>I am a frontend developer from Addis Ababa, Ethiopia with 1 year of experience.</p>
      <div className='hero-action'></div>
      <div className='hero-connect'>
        <Link className='anchor-link' to='/contact'>
          Connect with me
        </Link>
      </div>
      <div className="hero-resume">My Resume</div>
    </div>
  );
}

export default Hero;