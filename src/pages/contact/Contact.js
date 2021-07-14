import React from 'react'
import imageContact from '../../images/contact-image.jpg'
import './Contact.scss'
import '../../styles/Palete.scss'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import BackgroundAll from '../../components/background/BackgroundAll';
import { ButtonEmail } from '../../components/buttonEmail/ButtonEmail';

export default function Contact() {
    return (
        <>
            <BackgroundAll />
            <div className='max-width'>
                <div className='left-content contact'>
                    <div className='title contact'>
                        <h2>Get in <span>touch</span></h2>
                    </div>
                    <div className='social-media'>
                        <a href='https://www.linkedin.com/in/mateo-mazzucco/' target='_blank'>
                            <FaLinkedinIn />
                        </a>
                        <a href='https://www.twitter.com/MazzuccoMateo/' target='_blank'>
                            <FiTwitter />
                        </a>
                        <a href='https://www.instagram.com/mateomazzucco/' target='_blank'>
                            <SiInstagram />
                        </a>
                        <a href='https://github.com/mateomazzucco11' target='_blank'>
                            <FaGithub />
                        </a>

                    </div>
                    <div className='content-button contact'>
                        <ButtonEmail label='mateomazzucco4@gmail.com' mailto='mailto:mateomazzucco4@gmail.com' />
                    </div>
                </div>
                <div className='right-image'>
                    <a>
                        <img src={imageContact} />
                    </a>
                </div>
            </div>
        </>
    )
}
