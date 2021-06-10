import React from 'react';
import './About.scss';
import '../../styles/Palete.scss';

import imageAbout from '../../images/about-image.jpg'

import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class About extends React.Component {

    render (){
        return (
            <Router>
                <div className='max-width' >
                    <div className='title about'>
                        <h2>About Me</h2>
                        <div className='line'></div>
                        <div className='line2'></div>
                        <p>I love Coding, Technology, Travel, and play Games</p>
                        <div>
                            <Link to='/about' id='about-click'>More about me</Link>
                        </div>
                    </div>
                    <Link to='/about' className='image image-about'>
                        <img src={ imageAbout } />
                    </Link>
                </div>
            </Router>
        )
    }
}
