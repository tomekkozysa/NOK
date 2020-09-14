import React from "react";
import nextofkin from "../img/nextofkin.svg";
import "./Header.css";
import Navigation from "../components/Navigation";


const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {

    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is_active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );

    
  };

  render() {
    return (
      <header className="header-main">
        <hgroup className="header-content">
          <div className="header-logo">
            <img src={nextofkin} alt="NextOfKin" />
          </div>
          <div className="nav-toggle">
            <svg className={this.state.active ? "nav-toggle-button is_open" : "nav-toggle-button"} 
            onClick={() => this.toggleHamburger()}            
            width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

            <line className="nav-toggle-button-line-one" x1="0" y1="15" y2="15" x2="30" strokeWidth="3" stroke="var(--c-primary)" />
            <line className="nav-toggle-button-line-two" x1="0" y1="15" y2="15" x2="30" strokeWidth="3" stroke="var(--c-primary)" />
            </svg>      
          </div>
        </hgroup>
        <Navigation active={this.state.navBarActiveClass} />
      </header>

    );
  }
};

export default Header;