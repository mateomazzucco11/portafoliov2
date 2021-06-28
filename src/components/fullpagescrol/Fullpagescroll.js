import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import './Fullpagescroll.scss'

import Home from '../../pages/home/Home'
import About from '../../pages/about/About';
import Project from '../../pages/projects/Project';
import Contact from '../../pages/contact/Contact';



const Fullpagescroll = () =>{
    return (
        <ReactFullpage
            scrollingSpeed = {1150}
            navigation
            render={() => {
                return (
                <>
                    <div className='section'>
                        <Home />
                    </div>
                    <div className='section'>
                        <About />
                    </div>
                    <div className='section'>
                        <Project />
                    </div>
                    <div className='section'>
                        <Contact />
                    </div>
                </>
                );
            }}
        />
    );
}

export default Fullpagescroll;