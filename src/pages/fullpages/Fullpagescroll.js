import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import '../../components/itemHome/ItemHome.scss';
import '../../styles/MobileResponsive.scss';

import Header from '../../components/header/Header';
import aboutImage from '../../images/about-image.jpg';
import projectImage from '../../images/project-image.jpg';
import contactImage from '../../images/contact-image.jpg';

import { ButtonEmail } from '../../components/buttonEmail/ButtonEmail';
import { ItemHome } from '../../components/itemHome/ItemHome';



const Fullpagescroll = () => {
    return (
        <>
            <Header />
            <ReactFullpage
                scrollingSpeed={1150}
                recordHistory={true}
                anchors={['Home', 'About', 'Project', 'Contact']}
                render={() => {
                    return (
                        <>
                            <div className='section' data-anchors='section1'>
                                <ItemHome
                                    subtitleText='Hi there 👋, im'
                                    titleText='mateo.'
                                    afterText='FrontEnd Developer 👨‍💻'
                                    addSocial='add'
                                    classNameTitle='home'
                                    scrollDown={true}
                                />
                            </div>
                            <div className='section' data-anchors='section2'>
                                <ItemHome
                                    titleText='About me'
                                    textText='I love Coding, Technology, Travel, and play Games'
                                    toButton='/About2'
                                    buttonText='More about me'
                                    toImage='/About2'
                                    imageSrc={aboutImage}
                                    altImage='About'
                                />
                            </div>
                            <div className='section' data-anchors='section3'>
                                <ItemHome
                                    titleText='Project'
                                    textText='Projects i Did'
                                    toButton='/Project2'
                                    buttonText='See projects'
                                    toImage='/Project2'
                                    imageSrc={projectImage}
                                    altImage='Project'
                                />
                            </div>
                            <div className='section' data-anchors='section4'>
                                <ItemHome
                                    titleText='Get in toutch'
                                    buttonText={<ButtonEmail label='mateomazzucco4@gmail.com' mailto='mailto:mateomazzucco4@gmail.com' />}
                                    addSocial='add'
                                    imageSrc={contactImage}
                                    altImage='About'
                                    classNameTitle='contact'
                                />
                            </div>
                        </>
                    );
                }}
            />
        </>
    );
}

export default Fullpagescroll;