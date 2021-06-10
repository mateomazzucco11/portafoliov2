import React from 'react'
import './Project.scss'
import '../../styles/Palete.scss'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import imageProject from '../../images/project-image.jpg'

export default function Project() {
    return (
        <Router>
            <div className='max-width'>
                <div className='title project'>
                    <h2>Project</h2>
                    <div className='line'></div>
                    <div className='line2'></div>
                    <p>Projects i Did</p>
                    <div>
                        <Link to='/project'>See projects</Link>
                    </div>
                </div>
                <Link to='/project' className='image image-project' >
                    <img src={ imageProject } />
                </Link>
            </div>
        </Router>
    )
}
