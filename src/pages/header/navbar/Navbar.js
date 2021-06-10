import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './Navbar.scss';
import '../../../styles/Palete.scss'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';



export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status:false
        }
    }

    menuOpen = function() {
        if (!this.state.status) {
            document.getElementById('switch-menu').classList.add('active')
            document.getElementById('nav-open').classList.add('active')
        } else {
            document.getElementById('switch-menu').classList.remove('active')
            document.getElementById('nav-open').classList.remove('active')
        }
        this.setState({status: !this.state.status})
    }.bind(this);

render(){
        return (
            <>
                <div className='container navbar'>
                    <div className={`hamburger-icon ${this.props.className}`} id='switch-menu' onClick={() => this.menuOpen()}>
                        <div className='bar-one rounded'></div>
                        <div className='bar-two rounded'></div>
                        <div className='bar-three rounded'></div>
                    </div>
                </div>
                <nav className={`container-nav out ${this.props.className}`} id='nav-open'>
                        <div className='section one'>
                            <p className='h1'>mateo</p>
                            <div>
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
                        <div className='section two'>
                            <div>
                                <div className='contact-cv'>
                                    <BrowserRouter>
                                        <Route>
                                            <Link to='/resource/resume-mateomazzucco.pdf' target='_blank'>Resume</Link>
                                        </Route>
                                    </BrowserRouter>
                                </div>
                                <p>See my summary.</p>
                            </div>
                            <div>
                                <a href='#'>About</a>
                                <p>Get to know me.</p>
                            </div>
                            <div>
                                <a href='#'>Project's</a>
                                <p>Things I've done.</p>
                            </div>
                            <div>
                                <a href='#'>Contact me</a>
                                <p>Come contact me.</p>
                            </div>
                        </div>
                </nav>
            </>
        )
    }
}
