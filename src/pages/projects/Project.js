import React from 'react'
import './Project.scss'
import '../../styles/Palete.scss'

import { Link } from 'react-router-dom'

import imageProject from '../../images/project-image.jpg'
import BackgroundAll from '../../components/background/BackgroundAll'

export default function Project() {
    return (
        <>
            <BackgroundAll />
            <div className='max-width'>
                <div className='left-content project'>
                    <div className='title'>
                        <h2>Project</h2>
                    </div>
                    <div className='content-text'>
                        <p>Projects i Did</p>
                    </div>
                    <div className='content-button'>
                        <Link to='/project'>See projects</Link>
                    </div>
                </div>
                <div className='right-image'>
                    <Link to='/project'>
                        <img src={ imageProject } />
                    </Link>
                </div>
            </div>
        </>
    )
}
