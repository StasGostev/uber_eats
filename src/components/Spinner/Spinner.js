import React from "react";
import './Spinner.scss';
import PropsTypes from 'prop-types';

export const Spinner = ({className}) => {
  return (
    <div className={`${className} lds-ripple`}>
      <div></div>
      <div></div>
    </div>
  );
};


Spinner.propTypes = {
    className: PropsTypes.string.isRequired
}
