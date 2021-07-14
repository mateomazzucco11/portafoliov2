import React from 'react';
import './Footer.scss';

import { HashRouter, Route, Link } from 'react-router-dom'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FcDownload } from 'react-icons/fc';

export const Footer = () => {
    return (
        <footer className='footer'>
            <HashRouter>
                <Route>
                    <div>
                        <Link to='/resource/resume-mateomazzucco.pdf' target='_blank'><div><span><FcDownload /></span></div> Resume</Link>
                    </div>
                </Route>
            </HashRouter>
            <div>
                <a href='https://www.linkedin.com/in/mateo-mazzucco/' target='_blank'>
                    <FaLinkedinIn />
                </a>
            </div>
            <div>
                <a href='https://twitter.com/MazzuccoMateo' target='_blank'>
                    <FiTwitter />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/mateomazzucco/' target='_blank'>
                    <SiInstagram />
                </a>
            </div>
            <div>
                <a href='https://github.com/mateomazzucco11' target='_blank'>
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}
