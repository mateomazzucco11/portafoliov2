import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import './Fullpagescroll.scss'
import '../../styles/MobileResponsive.scss'

import Home from '../../pages/home/Home'
import About from '../../pages/about/About';
import Project from '../../pages/projects/Project';
import Contact from '../../pages/contact/Contact';
import Header from '../../pages/header/Header';




const Fullpagescroll = () =>{
    return (
        <>
        <Header />
        <ReactFullpage
            scrollingSpeed = {1150}
            recordHistory = {true}
            anchors={['Home', 'About', 'Project', 'Contact']}
            navigation
            render={() => {
                return (
                <>
                    <div className='section' data-anchors='section1'>
                        <Home />
                    </div>
                    <div className='section' data-anchors='section2'>
                        <About />
                    </div>
                    <div className='section' data-anchors='section3'>
                        <Project />
                    </div>
                    <div className='section' data-anchors='section4'>
                        <Contact />
                    </div>
                </>
                );
            }}
        />
        </>
    );
}

export default Fullpagescroll;