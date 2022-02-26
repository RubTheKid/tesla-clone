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
                <p>&nbsp; CyberTruck &nbsp;</p>
                <p>&nbsp; Model S &nbsp;</p>
                <p>&nbsp; Model 3 &nbsp;</p>
                <p>&nbsp; Model X &nbsp;</p>
                <p>&nbsp; Model Y &nbsp;</p>
                <p>&nbsp; Solar Roof &nbsp;</p>
                <p>&nbsp; Solar Panel &nbsp;</p>
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