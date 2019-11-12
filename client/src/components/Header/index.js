import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/backpackLogo.png';

const Header = () => (
    <div>
        <header><img src={logo} alt="Logo"></img>Backpack Adventures</header>
    </div>
);
export default Header;