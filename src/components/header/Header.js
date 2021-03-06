import React from 'react'
import './Header.scss'

import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'


export default function Header({ className }) {
    return (
        <header className={`container header ${className}`}>
            <Logo />
            <Navbar />
        </header>
    )
}
