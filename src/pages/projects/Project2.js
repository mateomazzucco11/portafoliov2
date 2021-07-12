import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Project2.scss'
import Header from '../../components/header/Header';
import Arrow from '../../components/return/Arrow';
import imageProject2 from '../../images/project-image.jpg';

import { Footer } from '../../components/footer/Footer';


export default function Project2() {
    const [change, setChange] = useState('change');

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
            <Arrow className={change} to='/#Project' />
            <Header className={change} />
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
                                        <a target='_blank' href='#'>Watch online</a>
                                    </div>
                                    <div>
                                        <a target='_blank' href='#'>See code</a>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    )
}