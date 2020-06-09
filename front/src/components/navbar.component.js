import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Exercises</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Log Exercise</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/user" className="nav-link">Add User</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            
        );
    }
}