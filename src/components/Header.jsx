import React from 'react'
import Logo from '../assets/images/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="menu">
            <img src={Logo} alt="Fylo logo" className='logo' />
            <nav className="navbar">
                <ul className="navlinks">
                    <li className="navlink">Features</li>
                    <li className="navlink">Team</li>
                    <li className="navlink">Sign In</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header