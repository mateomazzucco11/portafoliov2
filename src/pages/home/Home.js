import React from 'react'

import './Home.scss'
import '../Styles.scss'


import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import BackgroundAll from '../../components/background/BackgroundAll';



export default function Home() {
    return (
        <>
            <BackgroundAll />
            <div className='max-width'>
                <div className='left-content home'>
                    <div className='title'>
                        <p>Hi there 👋, i'm</p>         
                        <h1>mateo .</h1>
                        <h2>FrontEnd Developer <span>👨‍💻</span></h2>
                    </div>
                    <div className='social-media'>
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
            </div>
        </>
    )
}
