import React, { useState } from 'react';
import './Testimonial.css';
import test1 from '../../assets/test1.png';
import test2 from '../../assets/test2.png';
import test3 from '../../assets/test3.png';

const testimonials = [
  {
    name: 'Abel gulbet',
    photo: test1,
    quote: 'This is an amazing service! Highly recommended.'
  },
  {
    name: 'leul eyasu',
    photo: test2,
    quote: 'I had a great experience working with him.'
  },
  {
    name: 'yohannes teferi',
    photo: test3,
    quote: 'Professional and efficient. Will work with him again.'
  }
];

const TestimonialCard = ({ name, photo, quote, theme }) => {
  return (
    <div className={`testimonial-card ${theme}`}>
      <img src={photo} alt={name} className="testimonial-photo" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-quote">"{quote}"</p>
    </div>
  );
}

const Testimonial = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            photo={testimonial.photo}
            quote={testimonial.quote}
            theme={theme}
          />
        ))}
      </div>
      <button className="testimonial-button prev" onClick={handlePrev}>Previous</button>
      <button className="testimonial-button next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Testimonial;