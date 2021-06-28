import React from 'react'
import './Logo.scss'
import '../../../styles/Palete.scss'

import { Link } from 'react-router-dom'


export default function Logo() {
    return (
        <Link 
        className='title-h1'
        to='/'
        id='logo'
        >
            mateo
        </Link>
    )
}
