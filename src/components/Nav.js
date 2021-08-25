import React, { Component } from 'react'
import { setTheme } from './Themes';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            theme: "dark"
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleLinkAction = this.handleLinkAction.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
    };

    toggleMenu() {
        this.setState({ visible: !this.state.visible })
    };

    closeMenu() {
        this.setState({ visible: !this.state.visible })
    };

    handleLinkAction() {
        this.setState({ visible: !this.state.visible })
    };

    handleTheme() {
        if (localStorage.getItem("theme") === "dark-theme") {
            setTheme("light-theme");
            this.setState({ theme: "light" })
        } else {
            setTheme("dark-theme");
            this.setState({ theme: "dark" })
        }
    }

    componentDidMount() {
        if (localStorage.getItem("theme") === "dark-theme") {
            this.setState({ theme: "dark" })
        } else if (localStorage.getItem("theme") === "light-theme") {
            this.setState({ theme: "light" })
        }
    }

    componentWillUnmount() {
        if (localStorage.getItem("theme") === "dark-theme") {
            this.setState({ theme: "dark" })
        } else if (localStorage.getItem("theme") === "light-theme") {
            this.setState({ theme: "light" })
        }
    }

    render() {
        return (
            <nav className="nav container" >
                <a href="#home" className="nav__logo">SUBIN</a>

                <div className={this.state.visible ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={this.handleLinkAction}>
                                <i className="fas fa-home nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={this.handleLinkAction}>
                                <i className="fas fa-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={this.handleLinkAction}>
                                <i className="fas fa-file-code nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link" onClick={this.handleLinkAction}>
                                <i className="fas fa-cubes nav__icon"></i> Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={this.handleLinkAction}>
                                <i className="fas fa-laptop-code nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={this.handleLinkAction}>
                                <i className="fas fa-paper-plane nav__icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className="fas fa-times nav__close" id="nav-close" onClick={this.closeMenu}></i>
                </div>

                <div className="nav__btns">
                    {/* Theme change button */}
                    <i className={this.state.theme === "light" ? "far fa-moon change-theme" : "far fa-sun change-theme"} id="theme-button" onClick={this.handleTheme}></i>

                    <div className="nav__toggle" id="nav-toggle" onClick={this.toggleMenu}>
                        <i className="fas fa-chevron-circle-up"></i>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;