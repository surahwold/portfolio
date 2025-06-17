import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import next from '../../assets/next.png';
import like from '../../assets/like.png';
import Testimonial from '../Testimonial/Testimonial';

const MyWork = () => {
    const [projects, setProjects] = useState(mywork_data);

    const incrementLikes = (index) => {
        const newProjects = [...projects];
        newProjects[index].likes += 1;
        setProjects(newProjects);
    };

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
            </div>
            <div className="mywork-container">
                {projects.map((work, index) => (
                    <div key={index} className='work-item'>
                        <a href={work.repo_url} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt=" " className='workpic' />
                        </a>
                        <div className="like-section">
                            <button onClick={() => incrementLikes(index)} className="like-button">
                                <img src={like} alt="Like" />
                            </button>
                            <span className="like-text">{work.likes} Likes</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={next} alt="" className='next'/>
            </div>
            <Testimonial />
        </div>
    );
}

export default MyWork;