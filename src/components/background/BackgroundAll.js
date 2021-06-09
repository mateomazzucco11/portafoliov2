import React from 'react'
import './BackgroundAll.scss'



import imageBackground from '../../images/background-1.jpg'

export default class BackgroundAll extends React.Component {
    render() {
        return (
            <ul className='content-img'>
                <li >
                    <img src={ imageBackground } />
                </li>
            </ul>
        )
    }
}
