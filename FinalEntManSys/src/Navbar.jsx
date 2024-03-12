import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-White" style={{ width: '80vw'}}>
            <div className="container-fluid justify-content-center">
                <a className="navbar-brand" href="#" style={{ fontSize: '28px'}} >Enterprise Management System</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">LOGOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
