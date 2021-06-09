import React from 'react';
import './Search.scss';

export default class SearchNav extends React.Component {

    render(){
        return (
            <div id='fp-nav' class='left'>
                <ul>
                    <li>
                        <a href="#section1"></a>
                    </li>
                    <li>
                        <a href="#section2"></a>
                    </li>
                    <li>
                        <a href='#section3'></a>
                    </li>
                    <li>
                        <a href='#section4'></a>
                    </li>
                </ul>
            </div>
        )
    }
}
