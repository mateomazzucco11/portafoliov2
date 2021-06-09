import React from 'react'
import './Header.scss'

import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'
import SearchNav from './search/SearchNav'

export default function Header() {
    return (
        <header className='container header'>
            <Logo />
            <Navbar />
            <SearchNav />
        </header>
    )
}
