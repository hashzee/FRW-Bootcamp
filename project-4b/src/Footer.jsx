import React from 'react'
import logo from './assets/logo.png';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="footer-logo">
                                <a className="navbar-brand" href="#"><img className='logo' src={logo} />MUTIFY</a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in<br /> magni mollitia.</p>
                            </div>
                            <div className="footer-social-links">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2020</p>
                </div>
            </footer>           
        </>
    )
}

export default Footer
