import React from 'react';
import './header.css'

const Header = (props) => {
    return (
        <div className='header d-flex p-3'>
            <h1 className='header__logo'>
                Star DB
            </h1>
            <nav className='navbar navbar-expand-lg'>
                <ul className='navbar-nav'>
                    <li className='nav-item ml-3'><a className='nav-link' href="#">People</a></li>
                    <li className='nav-item ml-3'><a className='nav-link' href="#">Planets</a></li>
                    <li className='nav-item ml-3'><a className='nav-link' href="#">Starships</a></li>
                </ul>
            </nav>
            <button className='btn btn-primary btn-sm btn-header'
            onClick={props.toggleService}>
                Toggle Service
            </button>
        </div>
    )
};

export default Header;