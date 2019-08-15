import React from 'react';
import './project-card.styles.scss'

export const ProjectCard = (props) => (
    <div className='project-card'>
        <img src='' alt='project'></img>
        <h1>{props.card.title}</h1>
        <p>{props.card.text}</p>
        <button></button>
        <button></button>
    </div>
)