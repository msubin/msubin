import React from 'react';
import { ReactComponent as Blob } from '../assets/blob.svg';

const Home = () => {
    return (
        <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__social">
                    <a href="https://linkedin.com/in/subin-moon-1205" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/proj__joy" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a href="https://github.com/Subin-Moon-1205" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                <div className="home__img">
                    <Blob />
                </div>

                <div className="home__data">
                    <h1 className="home__title">Hi, I am Subin</h1>
                    <h3 className="home__subtitle">Aspiring Software Developer</h3>
                    <p className="home__description">I am currently enrolled in the Computer Systems Technology at BCIT in Vancouver, Canada. </p>

                    <a href="#contact" className="button button--flex">
                        Contact Me<i className="fas fa-envelope button__icon"></i>
                    </a>
                </div>
            </div>

            <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                    <i className="fas fa-mouse home__scroll-mouse"></i>
                    <span className="home__scroll-name">Scroll Down</span>
                    <i className="fas fa-arrow-down home__scroll-down"></i>
                </a>
            </div>
        </div>
    )

}

export default Home;