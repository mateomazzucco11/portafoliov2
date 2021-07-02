import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import backgroundNav from '../../../videos/backgroundNav.mp4'
import astronautNav from '../../../images/astronaut.png'

import './Navbar.scss';
import '../../../styles/Palete.scss'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';


const Navbar = () => {
    const [ active, setActive ] = useState(false)
    return (
        <>
            <div className='container navbar'>
                <div className={`hamburger-icon ${active ? 'active' : ''}`} id='switch-menu' onClick={() => setActive(!active)}>
                    <div className='bar-one rounded'></div>
                    <div className='bar-two rounded'></div>
                    <div className='bar-three rounded'></div>
                </div>
            </div>
            <nav className={`container-nav out ${active ? 'active' : ''}`} id='nav-open'>
                    <div className='background'>
                        <video src={ backgroundNav } autoPlay loop muted/>
                    </div>
                    <div className='right-side astronaut'>
                        <img src={ astronautNav } />
                    </div>
                    <div className='left-side'>
                        <div className='content-left'>
                            <BrowserRouter>
                                <Route>
                                    <Link to='/resource/resume-mateomazzucco.pdf' target='_blank'>Resume</Link>
                                </Route>
                            </BrowserRouter>
                            <div className='contact-social'>
                                <a href='https://www.linkedin.com/in/mateo-mazzucco/' target='_blank'>
                                    <FaLinkedinIn />
                                </a>
                                <a href='google.com' target='_blank'>
                                    <FiTwitter />
                                </a>
                                <a href='https://www.instagram.com/mateomazzucco/' target='_blank'>
                                    <SiInstagram />
                                </a>
                                <a href='https://github.com/mateomazzucco11' target='_blank'>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                        <div className='content-right'>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/project'>Projects</Link>
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Navbar;
