import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <header>
        <div className="container">
            <Link to="/">
                <h1>Covid19-Data</h1>
            </Link>
        </div>
    </header>
);

export default Header;