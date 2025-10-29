import React from 'react'
import footer from '../../assets/footer.png' 
import user from '../../assets/user.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
         <div className='footer-top'>
           <div className='footer-top-left'>
            <img src={footer} alt=''/>
            <p>I am a frontend developer from Ethiopia with 1 year of experience. I have hands-on experience with React, And I am proficient in HTML, CSS, and JavaScript. I have worked on several projects, I am a strong team player with excellent problem-solving skills, and I am committed to continuous learning and professional growth. I also regularly attend local developer meetups to stay updated on industry trends.
            </p>
           </div>
           <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user} alt=''className='user'/>
                <input type='email' placeholder='Enter email'></input>
            </div>
            <div className="footer-subscribe">Subscribe</div>
           </div>
         </div>
         <hr/>
         <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2025 Surafel H/wold. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Connect with me</p>
            </div>
         </div>
    </div>
    
  )
}

export default Footer