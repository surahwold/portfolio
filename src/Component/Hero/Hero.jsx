import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';
import gibli from '../../assets/gibli.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={gibli} alt='' className='profile'/>
      <h1><span>I'm Surafel H/wold</span>, frontend developer based in Ethiopia. </h1>
      <p>I specialize in building responsive and user-friendly web interfaces, combining strong UI/UX design and graphic design skills to create visually appealing and intuitive digital experiences.</p>
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