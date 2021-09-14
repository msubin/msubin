import React from 'react';
import resume from '../assets/pdf/Resume.pdf';

const About = () => {
    return (
        <>
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">
                My Introduction
            </span>

            <div className="about__container container grid">
                <img src="/images/About.jpeg" alt="" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        An organized, diligent individual and reliable team player, I am eager to contribute my skills and knowledge to develop meaningful experiences. Moving to a new country shows my willingness to take risks; be it learning a new language or adjusting to a whole new culture. I am willing to step outside my comfort zone. Expanding my horizons and gaining valuable experience in a professional and practical working environment is my current career objective.
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">00+</span>
                            <span className="about__info-name">Years <br /> Experience </span>
                        </div>

                        <div>
                            <span className="about__info-title">04+</span>
                            <span className="about__info-name">Completed <br /> Project </span>
                        </div>

                        <div>
                            <span className="about__info-title">00+</span>
                            <span className="about__info-name">Companies <br /> Worked </span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download="Resume_MSubin" href={resume} className="button button--flex">
                            Download CV <i className="fas fa-file-download about__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About;