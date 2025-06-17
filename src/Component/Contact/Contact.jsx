import React, { useRef, useState } from 'react';
import './Contact.css';
import mailicon from '../../assets/mailicon.png';
import location from '../../assets/location.png';
import call from '../../assets/call.png';

const Contact = () => {
  const textareaRef = useRef(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleTextareaChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    if (words.length > 500) {
      alert("The message should not exceed 500 words.");
    }
    setIsSubmitDisabled(words.length > 500);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const textareaValue = textareaRef.current.value;
    const words = textareaValue.trim().split(/\s+/);
    if (words.length > 500) {
      alert("The message should not exceed 500 words.");
      return;
    }

    formData.append("access_key", "f2160829-be20-4497-bee0-a9e519aff8fd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>I'm currently available to take on new projects. With expertise in Frontend. I am open to remote work and flexible scheduling to accommodate your requirements.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailicon} alt='' className='mailicon'/>
              <p>surahwold@727gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt='' className='call'/> 
              <p>+251-93804402</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt='' className='location'/>
              <p>AA, Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action='' className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor=''>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor=''>Write your message here</label>
          <textarea ref={textareaRef} name='message' rows={5} placeholder="Enter your message" onChange={handleTextareaChange}></textarea> 
          <button type='submit' className="contact-submit" disabled={isSubmitDisabled}> Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;