import React from 'react';
import PropTypes from 'prop-types';
import '../ErrorPage/ErrorPage.scss';

export const ErrorPage = ({ message }) => {
  return (
    <div className='error'>
      <h3 className='error__heading'>Oooops!</h3>
      <p className='error__text'>Something went wrong...</p>
      <p className='error__massage'>{`Happened due to an error: ${message}`}</p>
      <a href='/' className='error__link'>
        Go Home...
      </a>
    </div>
  );
};

ErrorPage.propTypes = {
  message: PropTypes.string
};

ErrorPage.defaultProps = {
  message: 'Failed to fetch',
}
