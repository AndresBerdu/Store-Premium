import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiMiniUserCircle } from "react-icons/hi2";
import { PiShoppingBagThin } from "react-icons/pi";

//style
import '../scss/components/NavBarComponentStyle.scss';

const NavBarComponent = () => {
  return (
<div className='topbar'>
        <div className='topbar-logo'>
          <PiShoppingBagThin className='topbar-logo-icon'/>
          <h1 className='topbar-logo-text'>PREMIUM STORE</h1>
        </div>
        <ul className='topbar-tag'>
            <li className='topbar-tag-list'>
                <Link style={{ textDecoration: 'none', color: 'inherit'}} to='/Dishes'>Dishes</Link>
            </li>
            <li className='topbar-tag-list'>
                <Link style={{ textDecoration: 'none', color: 'inherit'}} to='/Drinks'>Drinks</Link>
            </li>
            <li className='topbar-tag-list'>
                <Link style={{ textDecoration: 'none', color: 'inherit'}} to='/Desserts'>Desserts</Link>
            </li>
            <li className='topbar-tag-list'>
                <Link style={{ textDecoration: 'none', color: 'inherit'}} to='/Soups'>Soups</Link>
            </li>
            <li className='topbar-tag-list'>
                <Link style={{ textDecoration: 'none', color: 'inherit'}} to='/About Us'>About Us</Link>
            </li>
        </ul>
        <div>
          <PiShoppingCartSimple className='topbar-icon'/>
          <HiMiniUserCircle className='topbar-icon'/>
        </div>
      </div>
  )
}

export { NavBarComponent };
