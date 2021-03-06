import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Footer } from '../../components/footer/Footer';
import { ItemHome } from '../../components/itemHome/ItemHome';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Project.scss'

import Header from '../../components/header/Header';
import Arrow from '../../components/return/Arrow';
import projectImage from '../../images/project-image.jpg';
import movieApp from '../../images/MovieApp.png';
import portfolioApp from '../../images/portfolioApp.png';

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
                    <ItemHome
                        titleText='Project'
                        textText='Projects i Did'
                        imageSrc={projectImage}
                        altImage='Project'
                        imageClassname='more-height'
                        scrollDown={true}
                    />
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
                                <img src={movieApp} alt='ProjectImage' />
                                <div>
                                    <div>
                                        <a target='blank' href='https://github.com/mateomazzucco11/Movie-Login-Mateo'>See code</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={portfolioApp} alt='ProjectImage' />
                                <div>
                                    <div>
                                        <a target='blank' href='https://github.com/mateomazzucco11/portafoliov2'>See code</a>
                                        
                                    </div>
                                    <div>
                                        <a target='blank' href='https://mateoportfolio.vercel.app/'>Watch online</a>
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