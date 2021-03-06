import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg justify-content-between">
            <div className="navbar-brand">GitHub Search</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={'/'} exact={true} className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                        Info
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
