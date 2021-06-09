import React from 'react'
import './Logo.scss'
import '../../../styles/Palete.scss'

import { Link } from 'react-scroll'


export default function Logo() {
    return (
        <Link 
        className='title-h1'
        to='Home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
            mateo
        </Link>
    )
}
