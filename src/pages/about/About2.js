import React, { useState, useEffect } from 'react';
import './About2.scss';
import Header from '../header/Header';
import Arrow from '../../components/return/Arrow'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import imageAbout from '../../images/about-image.jpg'
import imageMe from '../../images/mee.jpg'
import travelImg from '../../images/travel.png'
import codeImg from '../../images/code.png'
import technologyImg from '../../images/technology.png'
import gamesImg from '../../images/games.png'
import cssSkill from '../../images/css.png'
import reactSkill from '../../images/react.png'
import githubSkill from '../../images/github.png'
import htmlSkill from '../../images/html.png'
import jsSkill from '../../images/js.png'
import linuxSkill from '../../images/linux.png'
import sassSkill from '../../images/sass.png'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FcDownload } from 'react-icons/fc';

export default function About2() {
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
            <Arrow />
            <div className='aboutMe max-width' id='about-open'>
                <div className='container-aboutMe'>
                    <section className='first-about-section'>
                        <div className='left-content about two'>
                            <div className='title'>
                                <h2>About Me</h2>
                            </div>
                            <div className='content-text'>
                                <p>I love Coding, Technology, Travel, and play Games</p>
                            </div>
                        </div>
                        <div className='about-right'>
                            <img src={ imageAbout } />
                        </div>
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
                                    <p>Born in Argentina, Cordoba, Jesus Maria. After finishing high school, I started Systems Engineering for personal reasons I left. <br></br>And I started working in construction, after 2 years decided to leave and dedicate myself totally to what I like, which is programming. <br></br> Started studying Computer Science Degree again and I'm looking for my first job as a Frontend Developer.</p>
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
                                        <p>I love writing code, I don't understand why I didn't get started before. I am excited about the idea that I can translate what I feel or think, as well as working as a team.</p>
                                    </div>
                                </div>
                                <div className='passion 2'>
                                    <img src={technologyImg} />
                                    <h2>Technology</h2>
                                    <div>
                                        <p>Since I was a kid I like technology, passionate about seeing what is coming out and always being updated.</p>
                                    </div>
                                </div>
                                <div className='passion 3'>
                                    <img src={travelImg} />
                                    <h2>Travel</h2>
                                    <div>
                                        <p>Why travel? Because I like to know what other cultures are like, to know and learn what life is like elsewhere. For later to be able to implement it in my attitudes</p>
                                    </div>
                                </div>
                                <div className='passion 4'>
                                    <img src={gamesImg} />
                                    <h2>Play Games</h2>
                                    <div>
                                        <p>Also other of my great passions, now I am away because I want to improve as a programmer. But I am excited to play, to compete and be the best. It teaches you a lot of things like teamwork, learning when we lose, learning to communicate and many other things.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='four-about-section'>
                        <div className='max-width'>
                            <div className='about-section-top'>
                                <h2>skill <span>set</span></h2>
                            </div>
                            <div className='about-section-bottom'>
                                <div className='container-skills'>
                                    <ul>
                                        <li>
                                            <div><img src={htmlSkill} title='HTML'/></div>
                                            <h2>HTML</h2>
                                        </li>
                                        <li>
                                            <div><img src={cssSkill} title='CSS'/></div>
                                            <h2>CSS</h2>
                                        </li>
                                        <li>
                                            <div><img src={jsSkill} title='JavaScript' /></div>
                                            <h2>Javascript</h2>
                                        </li>
                                        <li>
                                            <div><img src={sassSkill} title='SASS'/></div>
                                            <h2>Sass</h2>
                                        </li>
                                        <li>
                                            <div><img src={reactSkill} title='React.js'/></div>
                                            <h2>React js</h2>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div><img src={linuxSkill} title='Linux'/></div>
                                            <h2>Linux</h2>
                                        </li>
                                        <li>
                                            <div><img src={githubSkill} title='GitHub'/></div>
                                            <h2>GitHub</h2>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
            </div>
        </>
    )
}
