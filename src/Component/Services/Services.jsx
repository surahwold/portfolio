import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data.js'
import arrow from '../../assets/arrow.jpg'


const Services = () => {
  return (
    
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
        </div>
        <div className="services-container">
         {Services_Data.map((service,index) => {
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                  <p>Read More</p>
                  <img src={arrow} alt="" className='arrow' />
                </div>

            </div>
         })}
        </div>

    </div>
  )
}

export default Services