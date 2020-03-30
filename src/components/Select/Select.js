import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

export const Select = props => {
  const { name, onSelect, options } = props;
  return (
    <>
      <img src='./images/world.svg' alt='language select' className='select__logo'/>
      <select name={name}  onChange={onSelect} className='select__menu' id='s'>
        {options.map(({ value: optionValue, label }) => {
          return (
            <option value={optionValue} className='select__option' key={optionValue}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
};

Select.defaultProps = {
  options: [],
  onSelect: () => {}
};
