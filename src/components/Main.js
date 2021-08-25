import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Footer from './Footer';

class Main extends Component {
    constructor(props) {
        super(props);

        this.handleScrollSectionsActiveLink = this.handleScrollSectionsActiveLink.bind(this);
    }

    // ================== SCROLL SECTIONS ACTIVE LINK ==================
    handleScrollSectionsActiveLink = () => {
        const sections = document.querySelectorAll("section[id]");
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id")

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
            } else {
                document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
            }
        })
    }

    componentDidMount() {
        document.addEventListener("scroll", this.handleScrollSectionsActiveLink, true);
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.handleScrollSectionsActiveLink);
    }

    render() {
        return (
            <>
                <main className="main">
                    <section className="home section" id="home">
                        <Home />
                    </section>

                    <section className="about section" id="about">
                        <About />
                    </section>

                    <section className="skills section" id="skills">
                        <Skills />
                    </section>

                    <section className="qualification section" id="qualification">
                        <Qualification />
                    </section>

                    <section className="portfolio section" id="portfolio">
                        <Portfolio />
                    </section>

                    <section className="contact section" id="contact">
                        <ContactMe />
                    </section>
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </>
        )
    }
};

export default Main;