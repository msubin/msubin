import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = { scrollTop: null }
        this.scrollTop = this.scrollTop.bind(this);
    }

    /*==================== SHOW SCROLL TOP ====================*/
    scrollTop = () => {
        const scrollY = window.scrollY;

        if (scrollY >= 560) {
            this.setState({ scrollTop: true })
        } else {
            this.setState({ scrollTop: false })
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollTop, true);
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollTop);
    }

    render() {
        return (
            <>
                <div className="footer__bg">
                    <div className="footer__container container grid">
                        <div>
                            <h1 className="footer__title">SUBIN</h1>
                            <span className="footer__subtitle">Aspiring Software Developer</span>
                        </div>

                        <ul className="footer__links">
                            <li>
                                <a href="#portfolio" className="footer__link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer__link">Contact Me</a>
                            </li>
                        </ul>

                        <div className="footer__socials">
                            <a href="https://linkedin.com/in/subin-moon-1205" target="_blank" rel="noreferrer" className="footer__social">
                                <i className="fab fa-linkedin"></i>
                            </a>

                            <a href="https://www.instagram.com/proj__joy" target="_blank" rel="noreferrer" className="footer__social">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <p className="footer__copy">&#169; Subin Moon. All right reserved.</p>
                </div>

                {/* ==================== SCROLL TOP ==================== */}
                <a href="#" className={this.state.scrollTop ? "scrollup show-scroll" : "scrollup"} id="scroll-up">
                    <i className="fas fa-arrow-up scrollup__icon"></i>
                </a>
            </>
        )
    }
};

export default Footer;