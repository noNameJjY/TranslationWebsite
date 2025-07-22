import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-content">
                <Link to="/" className="header-title">
                    <h1>winfanyi</h1>
                </Link>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;