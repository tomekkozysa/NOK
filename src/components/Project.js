import React, { Component } from "react";


const Project = class extends React.Component {
    state = {
        isActive: false
    };

    handleCommercialClick = () => {
        this.setState({
            isActive: true
        });
    };
    handleSocialClick = () => {
        this.setState({
            isActive: true
        });
    };
    handleLongFormClick = () => {
        this.setState({
            isActive: true
        });
    };
    render() {
        return (
            // HTML part
            <div className="home-page-projects-filter">
                <h2 className="projects-filter-headline">Our work</h2>
                <ul className="projects-filter-items">
                    {this.state.isActive ? <h1>this is working</h1> : null}
                    <li className="projects-filter-item" onClick={this.handleCommercialClick}>Commercial</li>
                    <li className="projects-filter-item" onClick={this.handleSocialClick}>Social</li>
                    <li className="projects-filter-item" onClick={this.handleLongFormClick}>Long form</li>
                </ul>
            </div>
        )
    }

};
export default Project;
