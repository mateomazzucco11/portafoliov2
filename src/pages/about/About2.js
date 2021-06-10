import React from 'react'
import './About2.scss'

import imageAbout from '../../images/about-image.jpg'
import imageMe from '../../images/mee.jpg'

import travelImg from '../../images/travel.png'
import codeImg from '../../images/code.png'
import technologyImg from '../../images/technology.png'
import gamesImg from '../../images/games.png'

export default function About2() {
    return (
        <div className='aboutMe max-width' id='about-open'>
            <div className='container-aboutMe'>
                <section className='first-about-section'>
                    <div className='about-section-left'>
                        <div className='title about-me'>
                            <h2>About Me</h2>
                            <div className='line'></div>
                            <div className='line2'></div>
                            <p>I love Coding, Technology, Travel, and play Games</p>
                        </div>
                        
                    </div>
                    <div className='about-section-right'>
                        <img src={ imageAbout } />
                    </div>
                    <span>scrolldown</span>
                </section>
                <section className='second-about-section'>
                    <div className='max-width'>
                        <div className='about-section-left'>
                            <h2><span>Who</span> i am</h2>
                        </div>
                        <div className='about-section-right'>
                            <h2>Mateo <span>Mazzucco</span></h2>
                            <div className='line'></div>
                            <div className='line2'></div>
                            <div>
                                <p>Born in Argentina, Cordoba, Jesus Maria. After finishing high school, I started Systems Engineering for personal reasons. <br></br>And I started working in construction, after 2 years decided to leave and dedicate myself totally to what I like, which is programming. <br></br> Started studying Computer Science Degree again and I'm looking for my first job as a frontend developer.</p>
                                <img src={imageMe} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='three-about-section'>
                    <div className='max-width'>
                        <div className='about-section-top'>
                            <h2><span>PAS</span>Sion</h2>
                        </div>
                        <div className='about-section-bottom'>
                            <div className='passion 1'>
                                <img src={codeImg} />
                                <h2>Coding</h2>
                                <div>
                                    <p>agsddag asdgsadadgas asfgasfgasfgafg sgasdga sgdsag ijmsf pofophmsp dasdgasdggasgdsagds</p>
                                </div>
                            </div>
                            <div className='passion 2'>
                                <img src={technologyImg} />
                                <h2>Technology</h2>
                                <div>
                                    <p>adgasdg agda gads gag das gagd asgag asgas</p>
                                </div>
                            </div>
                            <div className='passion 3'>
                                <img src={travelImg} />
                                <h2>Travel</h2>
                                <div>
                                    <p> sdhdsh sdh sdfhsdhfsdhsdhsdhffshsdfhsdhsd </p>
                                </div>
                            </div>
                            <div className='passion 4'>
                                <img src={gamesImg} />
                                <h2>Play Games</h2>
                                <div>
                                    <p> sdhf sdhsdh sdhfs hsfd hsdfh sdhshs dfhshs dhsdfh sdh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
