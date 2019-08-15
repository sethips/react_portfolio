import React from 'react';
import './project-card.styles.scss'

export const ProjectCard = (props) => (
    <div className='project-card' 
    style={{backgroundImage: `url(${props.card.image})` }}>
        <div className='project-contents'>
        <h1>{props.card.title}</h1>
        <p>{props.card.text}</p>
        <button>View Code</button>
        <button>Demo</button>
        </div>
    </div>
)