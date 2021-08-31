import React from 'react';
import { Link } from 'react-router-dom';

import BackgroundAll from '../background/BackgroundAll'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';

export const ItemHome = ({
    classNameTitle,
    titleText,
    subtitleText,
    afterText,
    textText,
    buttonText,
    toButton,
    toImage,
    imageSrc,
    altImage,
    addSocial,
    imageClassname,
    scrollDown
}) => {
    return (
        <>
            <BackgroundAll />
            <div className='max-width' >
                <div className='left-content'>
                    <div className={`title ${classNameTitle} `}>
                        {subtitleText &&
                            <p>{subtitleText}</p>
                        }
                        <h2>{titleText}</h2>
                        <div className='lines'>
                            <span />
                            <span />
                        </div>
                        {afterText &&
                            <p>{afterText}</p>
                        }
                        {textText && (
                            <p>{textText}</p>
                        )}
                        {addSocial && (
                            <div className={`social-media ${addSocial}`}>
                                <a href='https://www.linkedin.com/in/mateo-mazzucco/' target='blank'>
                                    <FaLinkedinIn />
                                </a>
                                <a href='https://www.twitter.com/MazzuccoMateo/' target='blank'>
                                    <FiTwitter />
                                </a>
                                <a href='https://www.instagram.com/mateomazzucco/' target='blank'>
                                    <SiInstagram />
                                </a>
                                <a href='https://github.com/mateomazzucco11' target='blank'>
                                    <FaGithub />
                                </a>
                            </div>
                        )}
                        {buttonText && (
                            <div className='content-button'>
                                <Link to={toButton}>{buttonText}</Link>
                            </div>
                        )}
                    </div>
                </div>
                {scrollDown && (
                    <div className='scrolldown'>
                        <span>scrolldown</span>
                    </div>
                )}
                {imageSrc && (
                    <div className={`right-image ${imageClassname}`}>
                        <Link to={toImage}>
                            <img src={imageSrc} alt={altImage} />
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}
