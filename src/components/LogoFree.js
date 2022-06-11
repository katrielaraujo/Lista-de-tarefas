import React from 'react';
import logo from '../images/freecodecamp-logo.png';
import '../stylesheets/LogoFree.css';

const LogoFree = () => (
    <header className="container-freecodecamp-logo">
        <img
        src={logo}
        className='freecodecamp-logo' 
        />
    </header>
);

export default LogoFree;