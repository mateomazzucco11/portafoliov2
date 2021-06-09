import React from 'react'
import './Project.scss'
import '../../styles/Palete.scss'

import imageProject from '../../images/project-image.jpg'

export default function Project() {
    return (
        <div className='max-width'>
            <div className='title project'>
                <h2>Project</h2>
                <div className='line'></div>
                <div className='line2'></div>
                <p>Projects i Did</p>
                <div>
                    <a href=''>See projects</a>
                </div>
            </div>
            <a className='image image-project' >
                <img src={ imageProject } />
            </a>
        </div>
    )
}
