import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/footer/Footer';
import { ItemHome } from '../../components/itemHome/ItemHome';

import './About.scss';

import Header from '../../components/header/Header';
import Arrow from '../../components/return/Arrow'

import aboutImage from '../../images/about-image.jpg'
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
import nodeSkill from '../../images/node.png'
import expressSkill from '../../images/express.png'
import agileSkill from '../../images/agile.png'
import mysqlSKill from '../../images/mysql.png'
import reduxSkill from '../../images/redux.png'
import responsiveSkill from '../../images/responsiveDesign.png'
import workbenchSkill from '../../images/workbench.png'
import npmSkill from '../../images/npm.png'

export default function About2() {
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
            <Header className={change} />
            <Arrow className={change} to='/#About' />
            <div className='aboutMe max-width' id='about-open'>
                <div className='container-aboutMe'>
                    <section className='first-about-section'>
                        <ItemHome
                            titleText='About me'
                            textText='I love Coding, Technology, Travel, and play Games'
                            imageSrc={aboutImage}
                            altImage='About'
                            imageClassname='more-height'
                            scrollDown={true}
                        />
                    </section>
                    <section className='second-about-section'>
                        <div className='max-width'>
                            <div className='about-section-left'>
                                <h2><span>Who</span> i am</h2>
                            </div>
                            <div className='about-section-right'>
                                <h2>Mateo <span>Mazzucco</span></h2>
                                <div>
                                    <p>Born in Argentina, Cordoba, Jesus Maria. After finishing high school, I started Systems Engineering for personal reasons I left. <br></br>And I started working in construction, after 2 years decided to leave and dedicate myself totally to what I like, which is programming. <br></br> Started studying Computer Science Degree again and I'm looking for my first job as a Frontend Developer.</p>
                                    <img src={imageMe} alt='Me' />
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
                                    <img src={codeImg} alt='Passion One' />
                                    <h2>Coding</h2>
                                    <div>
                                        <p>I love writing code, I don't understand why I didn't get started before. I am excited about the idea that I can translate what I feel or think, as well as working as a team.</p>
                                    </div>
                                </div>
                                <div className='passion 2'>
                                    <img src={technologyImg} alt='Passion Two' />
                                    <h2>Technology</h2>
                                    <div>
                                        <p>Since I was a kid I like technology, passionate about seeing what is coming out and always being updated.</p>
                                    </div>
                                </div>
                                <div className='passion 3'>
                                    <img src={travelImg} alt='Passion Three' />
                                    <h2>Travel</h2>
                                    <div>
                                        <p>Why travel? Because I like to know what other cultures are like, to know and learn what life is like elsewhere. For later to be able to implement it in my attitudes</p>
                                    </div>
                                </div>
                                <div className='passion 4'>
                                    <img src={gamesImg} alt='Passion Four' />
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
                                            <div><img src={htmlSkill} title='HTML' alt='HTML' /></div>
                                            <h2>HTML</h2>
                                        </li>
                                        <li>
                                            <div><img src={cssSkill} title='CSS' alt='CSS' /></div>
                                            <h2>CSS</h2>
                                        </li>
                                        <li>
                                            <div><img src={jsSkill} title='JavaScript' alt='JavaScript' /></div>
                                            <h2>Javascript</h2>
                                        </li>
                                        <li>
                                            <div><img src={sassSkill} title='SASS' alt='SASS' /></div>
                                            <h2>Sass</h2>
                                        </li>
                                        <li>
                                            <div><img src={reactSkill} title='React.js' alt='React' /></div>
                                            <h2>React js</h2>
                                        </li>
                                        <li>
                                            <div><img src={nodeSkill} title='Node.js' alt='Node.js' /></div>
                                            <h2>Node.js</h2>
                                        </li>
                                        <li>
                                            <div><img src={reduxSkill} title='Redux' alt='Redux' /></div>
                                            <h2>Redux</h2>
                                        </li>
                                        <li>
                                            <div><img src={mysqlSKill} title='MySQL' alt='MySQL' /></div>
                                            <h2>MySQL</h2>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div><img src={linuxSkill} title='Linux' alt='Linux' /></div>
                                            <h2>Linux</h2>
                                        </li>
                                        <li>
                                            <div><img src={githubSkill} title='GitHub' alt='GitHub' /></div>
                                            <h2>GitHub</h2>
                                        </li>
                                        <li>
                                            <div><img src={agileSkill} title='AGILE' alt='Agile' /></div>
                                            <h2>AGILE</h2>
                                        </li>
                                        <li>
                                            <div><img src={workbenchSkill} title='Workbench' alt='Workbench' /></div>
                                            <h2>Workbench</h2>
                                        </li>
                                        <li>
                                            <div><img src={responsiveSkill} title='Responsive design' alt='Responsive design' /></div>
                                            <h2>Responsive </h2>
                                        </li>
                                        <li>
                                            <div><img src={npmSkill} title='NPM' alt='NPM' /></div>
                                            <h2>NPM</h2>
                                        </li>
                                        <li>
                                            <div><img src={expressSkill} title='Express' alt='Express' /></div>
                                            <h2>Express</h2>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
