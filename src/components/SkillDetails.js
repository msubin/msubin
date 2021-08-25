import React, { Component } from 'react';


class SkillDetails extends Component {
    render() {
        const {
            name,
            level,
            classConv
        } = this.props;

        return (
            <>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">{name}</h3>
                        <span className="skills__number">{level}</span>
                    </div>
                    <div className="skills__bar">
                        <span className={"skills__percentage skills__" + classConv}></span>
                    </div>
                </div>
            </>
        )
    }
};

export default SkillDetails;