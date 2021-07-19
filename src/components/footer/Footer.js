import React from 'react';
import './Footer.scss';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FcDownload } from 'react-icons/fc';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <a href='/docs/Resume.pdf' download><div><span><FcDownload /></span></div> Resume</a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/mateo-mazzucco/' target='blank'>
                    <FaLinkedinIn />
                </a>
            </div>
            <div>
                <a href='https://twitter.com/MazzuccoMateo' target='blank'>
                    <FiTwitter />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/mateomazzucco/' target='blank'>
                    <SiInstagram />
                </a>
            </div>
            <div>
                <a href='https://github.com/mateomazzucco11' target='blank'>
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}
