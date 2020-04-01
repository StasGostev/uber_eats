import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { Input } from "../Input/Input";

export class Header extends Component {
  state = {
    isMobileSearchVisible: false,
    isMobileDeliveryVisible: false,
  };

  handleChange = ({ target }) => {
    this.props.changeInputValue(target.name, target.value);
  };

  toggleSearch = () => {
    this.setState(state => {
      const { isMobileSearchVisible } = state;
      return {
        isMobileSearchVisible: !isMobileSearchVisible,
        isMobileDeliveryVisible: false
      };
    });
  };

  toggleDelivery = () => {
    this.setState(state => {
      const { isMobileDeliveryVisible } = state;
      return {
        isMobileDeliveryVisible: !isMobileDeliveryVisible,
        isMobileSearchVisible: false
      };
    });
  };

  closeMobileControls = () => {
    this.setState({
      isMobileDeliveryVisible: false,
      isMobileSearchVisible: false
    });
  };

  render() {
    const { address, time, search } = this.props.inputValues;
    const {
      isMobileDeliveryVisible,
      isMobileSearchVisible
    } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img
              src="./images/logo.svg"
              alt="UberEats"
              className="header__logo"
            />
            <div className="header__delivery-info">
              <Input
                name="address"
                onChange={this.handleChange}
                value={address}
                placeholder="Address"
                iconUrl="./images/place.svg"
              />
              <Input
                name="time"
                onChange={this.handleChange}
                value={time}
                placeholder="Deliver now"
                iconUrl="./images/time.svg"
                type="time"
              />
            </div>
            <div className="header__search">
              <Input
                name="search"
                onChange={this.handleChange}
                value={search}
                placeholder="Search"
                iconUrl="./images/search.svg"
                className="header__search-input"
              />
            </div>
            <div className="header__toggle-buttons">
              <button
                className="header__toggle-btn"
                onClick={this.toggleDelivery}
              >
                <img
                  src="./images/place.svg"
                  alt="location"
                  className="header__toggle-icon"
                />
              </button>
              <button
                className="header__toggle-btn"
                onClick={this.toggleSearch}
              >
                <img
                  src="./images/search.svg"
                  alt="search"
                  className="header__toggle-icon"
                />
              </button>
            </div>
            <a className="header__link" href="#">
              Sign In
            </a>
          </div>
          {(isMobileDeliveryVisible || isMobileSearchVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <div className="header__mobile-search">
                  <Input
                    label="Find"
                    name="search"
                    onChange={this.handleChange}
                    value={search}
                    placeholder="Search"
                    iconUrl="./images/search.svg"
                    className="header__search-input"
                  />
                </div>
              )}

              {isMobileDeliveryVisible && (
                <>
                  <Input
                    label="Where"
                    name="address"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="Address"
                    iconUrl="./images/place.svg"
                  />
                  <Input
                    label="To"
                    name="time"
                    onChange={this.handleChange}
                    value={time}
                    placeholder="Deliver now"
                    iconUrl="./images/time.svg"
                    type="time"
                  />
                </>
              )}
              <button
                className="mobile-controls__close"
                onClick={this.closeMobileControls}
              >
                <img
                  src="./images/close.svg"
                  alt="close"
                  className="mobile-controls__close-btn"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  inputValues: PropTypes.object
};

Header.defaultProps = {
  inputValues: {}
};
