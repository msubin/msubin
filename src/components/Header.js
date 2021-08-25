import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { scrollHeader: null }
        this.scrollHeader = this.scrollHeader.bind(this);
    }

    // ================== SCROLL SECTIONS ACTIVE LINK ==================
    scrollHeader = () => {
        const scrollY = window.scrollY;

        if (scrollY >= 200) {
            this.setState({ scrollHeader: true })
        } else { this.setState({ scrollHeader: false }) }
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollHeader, true);
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHeader);
    }

    render() {
        return (
            <header className={this.state.scrollHeader ? "header scroll-header" : "header"} id="header">
                <Nav />
            </header>
        )
    }
};

export default Header;