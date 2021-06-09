import React from 'react';
import './About.scss';
import '../../styles/Palete.scss';

import imageAbout from '../../images/about-image.jpg'

export default function About() {
    return (
        <div className='max-width'>
            <div className='title about'>
                <h2>About Me</h2>
                <div className='line'></div>
                <div className='line2'></div>
                <p>I love Coding, Technology, Travel, and play Games</p>
                <div>
                    <a href=''>More about me</a>
                </div>
            </div>
            <a className='image image-about' >
                <img src={ imageAbout } />
            </a>
        </div>
    )
}
