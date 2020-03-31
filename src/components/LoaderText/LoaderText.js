import './LoaderText.scss';
import React from 'react';
import PropsTypes from 'prop-types';

export const LoaderText = ({className}) => {
  const text = 'loading';
  return (
    <div className={`${className} loader-text`}>
      {[...text].reverse().map(char => (
        <div className='loader-text__char' key={char}>
          {char}
        </div>
      ))}
    </div>
  );
};

LoaderText.propTypes = {
    className: PropsTypes.string.isRequired
}
