import React from 'react';
import './Search.scss';

import { Link } from 'react-scroll'

export default class SearchNav extends React.Component {
    


    render(){
        return (
            <div className='search-nav-left'>
                <ul>
                    <li>
                        <Link to='Home' spy={true} smooth={true} activeClass='active'></Link>
                    </li>
                    <li>
                        <Link to='About' spy={true} smooth={true} activeClass='active' ></Link>
                    </li>
                    <li>
                        <Link to='Project' spy={true} smooth={true} activeClass='active' ></Link>
                    </li>
                    <li>
                        <Link to='Contact' spy={true} smooth={true} activeClass='active' ></Link>
                    </li>
                </ul>
            </div>
        )
    }
}
