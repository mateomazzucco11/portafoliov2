import React from 'react'
import './About2.scss'

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
                <section className='four-about-section'>
                    <div className='max-width'>
                        <div className='about-section-top'>
                            <h2>skill <span>set</span></h2>
                        </div>
                        <div className='about-section-bottom'>
                            <div className='container-skills'>
                                <ul>
                                    <li>
                                        <div><img src={htmlSkill} /></div>
                                        <h2>HTML</h2>
                                    </li>
                                    <li>
                                        <div><img src={cssSkill} /></div>
                                        <h2>CSS</h2>
                                    </li>
                                    <li>
                                        <div><img src={jsSkill} /></div>
                                        <h2>Javascript</h2>
                                    </li>
                                    <li>
                                        <div><img src={sassSkill} /></div>
                                        <h2>Sass</h2>
                                    </li>
                                    <li>
                                        <div><img src={reactSkill} /></div>
                                        <h2>React js</h2>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div><img src={linuxSkill} /></div>
                                        <h2>Linux</h2>
                                    </li>
                                    <li>
                                        <div><img src={githubSkill} /></div>
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
    )
}