import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Project2.scss'
import Header from '../header/Header';
import imageProject2 from '../../images/project-image.jpg'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FcDownload } from 'react-icons/fc';


export default function Project2() {
    const [ change, setChange ] = useState('change'); 
    
    const listenScrollEvent = () => {
        if (window.scrollY < 885) {
            return setChange('change');
        } else if (window.scrollY > 885) {
            return setChange('changeColor')
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        }
    }, []);

    return (
        <>
            <Header className={ change }/>
            <div className='projectMe' >
                <section className='first-project-section'>
                    <div className='left-content project two'>
                        <div className='title'>
                            <h2>Project</h2>
                        </div>
                        <div className='content-text'>
                            <p>Projects i Did</p>
                        </div>
                    </div>
                    <div className='project-right'>
                        <img src={imageProject2} />
                    </div>
                </section>
                <section className='second-project-section'>
                    <div className='title project-section2'>
                        <h2>Look at my <span>projects</span></h2>
                    </div>
                    <div className='container-projects'>
                        <Carousel 
                            showArrows={false} 
                            emulateTouch={true} 
                            infiniteLoop={true} 
                            autoPlay={true} 
                            showThumbs={false} 
                            showStatus={false} 
                            stopOnHover={true}
                            swipeable={true}
                            showIndicators={false}
                            transitionTime={750}
                            verticalSwipe='standard'
                        >
                            <div>
                                <img src={imageProject2} />
                                <div>
                                    <div>
                                        <a target='_blank'>Watch online</a>
                                    </div>
                                    <div>
                                        <a target='_blank'>See code</a>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <footer>
                            <BrowserRouter>
                                <Route>
                                    <div>
                                        <Link to='/resource/resume-mateomazzucco.pdf' target='_blank'><div><span><FcDownload /></span></div> Resume</Link>
                                    </div>
                                </Route>
                            </BrowserRouter>
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
                </section>
            </div>
        </>
    )
}
