import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
                    <div className='section one'>
                        <p className='h1'>mateo</p>
                        <div>
                            <a href='https://www.linkedin.com/in/mateo-mazzucco/' target='_blank'>
                                <FaLinkedinIn />
                            </a>
                            <a href='https://twitter.com/MazzuccoMateo' target='_blank'>
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
                    <div className='section two'>
                        <div>
                            <div className='contact-cv'>
                                <BrowserRouter>
                                    <Route>
                                        <Link to='/resource/resume-mateomazzucco.pdf' target='_blank'>Resume</Link>
                                    </Route>
                                </BrowserRouter>
                            </div>
                            <p>See my summary.</p>
                        </div>
                        <div>
                            <Link to='/about' onClick={() => setActive(!active)}>About</Link>
                            <p>Get to know me.</p>
                        </div>
                        <div>
                            <Link to='/project' onClick={() => setActive(!active)}>Project's</Link>
                            <p>Things I've done.</p>
                        </div>
                        <div>
                            <Link to='/' onClick={() => setActive(!active)}>Contact me</Link>
                            <p>Come contact me.</p>
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Navbar;
