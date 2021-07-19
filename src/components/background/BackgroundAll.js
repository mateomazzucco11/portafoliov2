import React from 'react';
import './BackgroundAll.scss';
import LeftSide from '../../images/background.png';
import ParallaxMousemove from 'react-parallax-mousemove';

export default class BackgroundAll extends React.Component {
    render() {
        const style = {
            bgLayerStyle: {
                position: 'absolute',
                right: 0,
                height: '100%',
            }
        }
        return (
            <ParallaxMousemove>
                <ul className='content-img'>
                    <li >
                        <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
                            xFactor: 0.06,
                            yFactor: 0.02,
                            springSettings: {
                                stiffness: 50,
                                damping: 10
                            }
                        }}>
                            <img src={LeftSide} alt='Background' />
                        </ParallaxMousemove.Layer>
                    </li>
                </ul>
            </ParallaxMousemove>
        )
    }
}