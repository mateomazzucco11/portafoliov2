import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; 

import Home from '../../pages/home/Home'
import About from '../../pages/about/About';
import Project from '../../pages/projects/Project';
import Contact from '../../pages/contact/Contact';


class Fullpagescroll extends React.Component {
    render() {
        return (
            <ReactFullpage
            scrollOverflow={true}
            render={({ state }) => {
                return (
                <>
                    <div className='section section1' id='Home'>
                        <Home />
                    </div>
                    <div className='section section2' id='About'>
                        <About />
                    </div>
                    <div className='section section3' id='Project'>
                        <Project />
                    </div>
                    <div className='section section4' id='Contact'>
                        <Contact />
                    </div>
                </>
                );
            }}
            />
        );
    }
}

export default Fullpagescroll;