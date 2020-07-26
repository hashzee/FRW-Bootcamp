import React from 'react'
import logo from './assets/logo.png';

function Header() {
    return (
        <>
        <header className="header fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">

                    <a className="navbar-brand" href="#"><img className='logo' src={logo} />MUTIFY</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

                    <div className="collapse navbar-collapse" id="collapseibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Works With</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Noise Level</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Switch Device</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Feedback</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>            
        </>
    )
}

export default Header
