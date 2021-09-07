
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import "../assets/Slide.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


const Slide = ({ projects }) => {
    return (
        <>
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
                {projects.map((project) =>
                    <SwiperSlide key={project.id.toString()}>
                        <div className="portfolio__content grid">
                            <img src={project.img} alt={project.title + ` logo`} className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">{project.title}</h3>
                                <p className="portfolio__description">
                                    {project.desc}
                                </p>
                                <a href={project.github} className="button button--flex button--small portfolio__button" target="_blank">
                                    Github
                                    <i className="fas fa-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </>
    )
}

export default Slide;