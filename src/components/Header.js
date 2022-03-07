import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

const Header = () => {
    return(
        <div className='header'>
            <div className="header__logo">
                <img src={TeslaLogo} alt='Tesla Logo' />
            </div>

            <div className="header__center">
                <button class='cars' a href="#"> CyberTruck </button>
                <button class='cars' a href="#"> Model S </button>
                <button class='cars' a href="#"> Model 3 </button>
                <button class='cars' a href="#"> Model X </button>
                <button class='cars' a href="#"> Model Y </button>
                <button class='cars' a href="#"> Solar Roof </button>
                <button class='cars' a href="#"> Solar Panel </button>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Account</p>
                <p>Menu</p>
            </div>
        </div>
    )

}

export default Header
