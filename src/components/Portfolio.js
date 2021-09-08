import React, { Component } from 'react';
// import PortfolioDetail from './PortfolioDetail';
import Slide from './Slide';

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            projects: [
                {
                    title: "Lukiest Numbers",
                    desc: "A webscraper to extract winning result data from a website. Through ETL process, load the most frequent winning numbers and visualize it.",
                    img: "/images/lottomax.jpg",
                    github: "https://github.com/subin-moon-1205/webscraper",
                    id: 1
                },
                {
                    title: "Binwhere",
                    desc: "A web application to help decrease the rate of littering on the street by showing all the bins near users’ current location.",
                    img: "/images/binwhere.png",
                    github: "https://github.com/hnngo/COMP-2800-Team-DTC-01-BinWhere",
                    id: 2
                },
                {
                    title: "ShopSmart",
                    desc: "A web application to store items on users’ shopping lists and pantry lists. Developed in a group of 4.",
                    img: "/images/shopsmart.png",
                    github: "https://github.com/Bromaniuk/COMP1800_Project_ShopSmart",
                    id: 3
                },
                {
                    title: "Namu",
                    desc: "A game aiming to raise awareness about the importance of the ocean ecosystem. Developed in a group of 5.",
                    img: "/images/namu.jpeg",
                    github: "https://github.com/DmitriGolota/hack-the-break",
                    id: 4
                }
            ]
        }
    }

    render() {
        return (
            <>
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent work</span>

                <div className="portfolio__container container swiper-container ">
                    <div className="swiper-wrapper">
                        <Slide projects={this.state.projects} />
                    </div>
                </div>

            </>
        )
    }

}

export default Portfolio;