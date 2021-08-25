import React, { Component } from 'react';
import SkillDetails from './SkillDetails';


class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontEnd: [
                { name: "HTML", level: "90%", class: "html", id: "front_1" },
                { name: "CSS", level: "80%", class: "css", id: "front_2" },
                { name: "JavaScript", level: "70%", class: "js", id: "front_3" },
                { name: "React", level: "70%", class: "react", id: "front_4" }
            ],
            backEnd: [
                { name: "Python", level: "85%", class: "python", id: "back_1" },
                { name: "NodeJs", level: "70%", class: "nodejs", id: "back_2" },
                { name: "Firebase", level: "50%", class: "firebase", id: "back_3" }
            ],
            others: [
                { name: "Git / Github", level: "80%", class: "git", id: "other_1" },
                { name: "Figma", level: "90%", class: "figma", id: "other_2" },
                { name: "Microsoft Excel", level: "100%", class: "excel", id: "other_3" },
                { name: "Microsoft Word", level: "100%", class: "word", id: "other_4" }
            ]
        }

        this.handleToggleSkills = this.handleToggleSkills.bind(this);
    }

    handleToggleSkills = (e) => {
        const skillsContent = document.getElementsByClassName("skills__content");
        let itemClass = e.target.parentElement.parentElement.className;

        for (var i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = "skills__content skills__close";
        }
        if (itemClass === "skills__content skills__close") {
            e.target.parentElement.parentElement.className = "skills__content skills__open"
        }
    }


    render() {
        return (
            <>
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My Technical Level</span>

                <div className="skills__container container grid">

                    {/* ==================== SKILLS 1 ==================== */}
                    <div className="skills__content skills__open">
                        <div className="skills__header" onClick={this.handleToggleSkills}>
                            <i className="fas fa-code skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Frontend Developer</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>

                            <i className="fas fa-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            {this.state.frontEnd.map((language) =>
                                <SkillDetails name={language.name} level={language.level} classConv={language.class} key={language.class} />
                            )}
                        </div>
                    </div>
                    {/* ==================== SKILLS 2 ==================== */}
                    <div className="skills__content skills__close">
                        <div className="skills__header" onClick={this.handleToggleSkills}>
                            <i className="fas fa-server skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Backend Developer</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>

                            <i className="fas fa-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            {this.state.backEnd.map((language) =>
                                <SkillDetails name={language.name} level={language.level} classConv={language.class} key={language.class} />
                            )}
                        </div>
                    </div>
                    {/* ==================== SKILLS 3 ==================== */}
                    <div className="skills__content skills__close">
                        <div className="skills__header" onClick={this.handleToggleSkills}>
                            <i className="fas fa-swatchbook skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Other Softwares</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>

                            <i className="fas fa-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            {this.state.others.map((language) =>
                                <SkillDetails name={language.name} level={language.level} classConv={language.class} key={language.class} />
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Skills;