import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import backgroundNav from '../../../videos/backgroundNav.mp4'
import astronautNav from '../../../images/astronaut.png'

import './Navbar.scss';
import '../../../styles/Palete.scss'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';

const navbar = {
    open: { opacity: 1, y: 0, display: 'block' },
    closed: { opacity: 0, y: '-60%', display: 'none' },
}
const astronaut = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '40%' },
}
const socialmedia = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-10%' },
}
const search = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-10%' },
}

const Navbar = () => {
    const [active, setActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='container navbar'>
                <div className={`hamburger-icon ${active ? 'active' : ''}`} id='switch-menu' onClick={() => setActive(!active) & setIsOpen(isOpen => !isOpen)}>
                    <div className='bar-one rounded'></div>
                    <div className='bar-two rounded'></div>
                    <div className='bar-three rounded'></div>
                </div>
            </div>
            <motion.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={navbar}
                transition={{ duration: .5 }}
            >
                <nav className={`container-nav out ${active ? 'active' : ''}`} id='nav-open'>
                    <div className='background'>
                        <video src={backgroundNav} autoPlay loop muted />
                    </div>
                    <div className='right-side astronaut'>
                        <motion.nav
                            initial={false}
                            animate={isOpen ? 'open' : 'closed'}
                            variants={astronaut}
                            transition={{ duration: .8, delay: .5 }}
                        >
                            <img src={astronautNav} alt='astronaut' />
                        </motion.nav>
                    </div>
                    <div className='left-side'>
                        <div className='content-left'>
                            <motion.nav
                                initial={false}
                                animate={isOpen ? 'open' : 'closed'}
                                variants={socialmedia}
                                transition={{ duration: .8, delay: 1 }}
                            >
                                <div className='contact-social'>
                                    <a href='https://www.linkedin.com/in/mateo-mazzucco/' target='blank'>
                                        <FaLinkedinIn />
                                    </a>
                                    <a href='https://www.twitter.com/MazzuccoMateo/' target='blank'>
                                        <FiTwitter />
                                    </a>
                                    <a href='https://www.instagram.com/mateomazzucco/' target='blank'>
                                        <SiInstagram />
                                    </a>
                                    <a href='https://github.com/mateomazzucco11/' target='blank'>
                                        <FaGithub />
                                    </a>
                                </div>
                            </motion.nav>
                        </div>
                        <motion.nav
                            initial={false}
                            animate={isOpen ? 'open' : 'closed'}
                            variants={search}
                            transition={{ duration: .8, delay: 1.5 }}
                        >
                            <div className='content-right'>
                                <Link to='/#Home' exact onClick={() => setActive(!active) & setIsOpen(isOpen => !isOpen)}>Home</Link>
                                <Link to='/#About' exact onClick={() => setActive(!active) & setIsOpen(isOpen => !isOpen)}>About</Link>
                                <Link to='/#Project' exact onClick={() => setActive(!active) & setIsOpen(isOpen => !isOpen)}>Projects</Link>
                                <Link to='/#Contact' exact onClick={() => setActive(!active) & setIsOpen(isOpen => !isOpen)}>Contact</Link>
                                <BrowserRouter>
                                    <Route>
                                        <Link to='/resource/resume-mateomazzucco.pdf' target='_blank'>Resume</Link>
                                    </Route>
                                </BrowserRouter>
                            </div>
                        </motion.nav>
                    </div>
                </nav>
            </motion.nav>
        </>
    )
}

export default Navbar;
