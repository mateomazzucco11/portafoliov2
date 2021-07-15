import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import './Fullpagescroll.scss';
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
                anchors={['#Home', '#About', '#Project', '#Contact']}
                navigation
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
                                    toButton='/about'
                                    buttonText='More about me'
                                    toImage='/about'
                                    imageSrc={aboutImage}
                                    altImage='About'
                                />
                            </div>
                            <div className='section' data-anchors='section3'>
                                <ItemHome
                                    titleText='Project'
                                    textText='Projects i Did'
                                    toButton='/project'
                                    buttonText='See projects'
                                    toImage='/project'
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