import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Events</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link"> Events</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createUser" className="nav-link"> Create user</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createCompany" className="nav-link"> Create company </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createEvent" className="nav-link"> Create event </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            );
    }
}

