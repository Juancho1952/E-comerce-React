import React from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <h2 className='header__title'>
                <Link to='/'>E-COMERCE</Link> 
            </h2>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'>
                        <Link className='header__link' to='/login'>
                            Login
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__link' to='/purchases'>
                            Purchases
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__link' to='/cart'>
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header