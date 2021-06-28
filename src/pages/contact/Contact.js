import React from 'react'
import imageContact from '../../images/contact-image.jpg'
import './Contact.scss'
import '../../styles/Palete.scss'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import BackgroundAll from '../../components/background/BackgroundAll';

export default function Contact() {
    return (
        <>
            <BackgroundAll />
            <div className='max-width'>
                <div className='title contact'>
                    <h2>Get in <span>touch</span></h2>
                    <div className='line'></div>
                    <div className='line2'></div>
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
                    <div className='contact-email'>
                        <a href='#'>mateomazzucco4@gmail.com</a>
                    </div>
                </div>
                <a className='image image-contact' >
                    <img src={ imageContact } />
                </a>
            </div>
        </>
    )
}
