import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Input } from '../Input/Input';

export class Header extends Component {
  componentDidMount() {
    let date = new Date();
    let timeNow = `${date.getHours()}:${date.getMinutes()}`;
    this.props.changeInputValue('time', timeNow);
  }

  handleChange = ({ target }) => {
    this.props.changeInputValue(target.name, target.value);
  };

  render() {
    const { address, time, search } = this.props.inputValues;

    return (
      <header className='header'>
        <div className='content'>
          <div className='header__inner'>
            <img
              src='./images/logo.svg'
              alt='UberEats'
              className='header__logo'
            />
            <div className='header__delivery-info'>
              <Input
                name='address'
                onChange={this.handleChange}
                value={address}
                placeholder='Address'
                iconUrl='./images/place.svg'
              />
              <Input
                name='time'
                onChange={this.handleChange}
                value={time}
                placeholder='Deliver now'
                iconUrl='./images/time.svg'
                type='time'
              />
            </div>
            <Input
              name='search'
              onChange={this.handleChange}
              value={search}
              placeholder='Search'
              iconUrl='./images/search.svg'
              className='header__search'
            />
            <a className='header__link' href='/sign-in'>
              Sign In
            </a>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  changeRestaurantList: PropTypes.func.isRequired,
  inputValues: PropTypes.object
};

Header.defaultProps = {
  inputValues: {}
};
