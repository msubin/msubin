import React, { Component } from 'react';

class Qualification extends Component {
    // const tabs = document.querySelectorAll("[data-target]");
    // const tabContents = document.querySelectorAll("[data-content]");
    constructor(props) {
        super(props);
        this.state = {
            education: true,
            work: false
        }


        this.handleTabs = this.handleTabs.bind(this);
    };

    handleTabs = (e) => {
        const target = e.target.dataset.field;

        if (target === "education") {
            this.setState(prevState => ({
                education: !prevState.education,
                work: false
            }));
        } else {
            this.setState(prevState => ({
                work: !prevState.work,
                education: false
            }));
        }
    }


    render() {
        return (
            <>
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Personal Journey</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={this.state.education ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} data-field="education" onClick={this.handleTabs}>
                            <i className="fas fa-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                        <div className={this.state.work ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} data-field="work" onClick={this.handleTabs}>
                            <i className="fas fa-briefcase qualification__icon"></i>
                            Work
                        </div>
                    </div>

                    <div className="qualification__sections">
                        {/* ==================== QUALIFICATION CONTENT - EDU ==================== */}
                        <div className={this.state.education ? "qualification__content qualification__active" : "qualification__content"} data-content id="education">
                            {/* ==================== QUALIFICATION - 1 ==================== */}
                            <div className="qualification__data" >
                                <div>
                                    <h3 className="qualification__title">Computer Systems Technology</h3>
                                    <span className="qualification__subtitle">BCIT, Vancouver</span>
                                    <div className="qualification__calendar">
                                        <i className="far fa-calendar-alt"></i>
                                        2021 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            {/* ==================== QUALIFICATION - 2 ==================== */}
                            <div className="qualification__data" >
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    {/* <span className="qualification__line"></span> */}
                                </div>

                                <div>
                                    <h3 className="qualification__title">Chinese Language and Culture</h3>
                                    <span className="qualification__subtitle">University of Seoul, Seoul</span>
                                    <div className="qualification__calendar">
                                        <i className="far fa-calendar-alt"></i>
                                        2014 - 2020
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ==================== QUALIFICATION CONTENT - WORK==================== */}
                        <div className={this.state.work ? "qualification__content qualification__active" : "qualification__content"} data-content id="work">
                            {/* ==================== QUALIFICATION - 1 ==================== */}
                            <div className="qualification__data" >
                                <div>
                                    <h3 className="qualification__title">Online Marketer</h3>
                                    <span className="qualification__subtitle">Spa, Vancouver</span>
                                    <div className="qualification__calendar">
                                        <i className="far fa-calendar-alt"></i>
                                        Apr, 21 - Present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            {/* ==================== QUALIFICATION - 2 ==================== */}
                            <div className="qualification__data" >
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Pharmacy Assistant</h3>
                                    <span className="qualification__subtitle">GT Pharmacy, La Ronge</span>
                                    <div className="qualification__calendar">
                                        <i className="far fa-calendar-alt"></i>
                                        Sep, 20 - Feb, 21
                                    </div>
                                </div>
                            </div>

                            {/* ==================== QUALIFICATION - 3 ==================== */}
                            <div className="qualification__data" >
                                <div>
                                    <h3 className="qualification__title">Marketing Agency Intern</h3>
                                    <span className="qualification__subtitle">Echo Marketing Agency, Seoul</span>
                                    <div className="qualification__calendar">
                                        <i className="far fa-calendar-alt"></i>
                                        Feb, 20 - May, 20
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    {/* <span className="qualification__line"></span> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }

};

export default Qualification;
