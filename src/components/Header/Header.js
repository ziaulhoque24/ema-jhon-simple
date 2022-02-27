import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/processed">Processed</Link>
            </nav>
        </div>
    );
};

export default Header;