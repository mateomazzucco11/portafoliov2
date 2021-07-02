import React from 'react';
import '../../styles/Palete.scss';
import './About.scss'

import imageAbout from '../../images/about-image.jpg'

import { Link } from 'react-router-dom'
import BackgroundAll from '../../components/background/BackgroundAll';

export default class About extends React.Component {

    render (){
        return (
            <>
                <BackgroundAll />
                <div className='max-width' >
                    <div className='left-content about'>
                        <div className='title'>
                            <h2>About Me</h2>
                        </div>
                        <div className='content-text'>
                            <p>I love Coding, Technology, Travel, and play Games</p>
                        </div>
                        <div className='content-button'>
                            <Link to='/about' id='about-click'>More about me</Link>
                        </div>
                    </div>
                    <div className='right-image'>
                        <Link to='/about'>
                            <img src={ imageAbout } />
                        </Link>
                    </div>
                    
                </div>
            </>
        )
    }
}
