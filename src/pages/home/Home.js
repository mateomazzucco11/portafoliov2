import React from 'react'

import './Home.scss'

import ScrollDown from '../../components/scrolldown/ScrollDown';
import imageHome from '../../images/home-image.png'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';



export default function Home() {
    return (
        <>
            <>
                <ScrollDown />
            </>
            <div className='container-home'>
                <div className='container-hi'>
                    <p id='canvas'>Hi there 👋, i'm</p>
                </div>
                <div className='container-me'>
                    <span className='h1'>mateo.</span><span className='h2'>FrontEnd Developer <span>👨‍💻</span></span>
                </div>
                <div className='line'></div>
                <div className='line2'></div>
                <div className='contact-home'>
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
                <div className='image-home'>
                    <img src={ imageHome } />
                </div>
            </div>
        </>
    )
}
