import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logotransparent.png';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <Link to="/" className="nav-logo-link">
                    <img src={logo} alt="ZoTography Logo" className="logo-img" />
                </Link>

                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li className="nav-contact"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;