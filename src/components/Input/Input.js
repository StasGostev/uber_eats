import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false
  };
  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  focusControl = () => this.inputRef.current.focus();

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      name,
      placeholder,
      className,
      label,
      mobile
    } = this.props;
    const { isFocused } = this.state;
    const rootClass = `control ${
      isFocused ? 'control--focused' : ''
    } ${className}`;

    return (
      <div className={rootClass} onClick={this.focusControl}>
        {!!iconUrl && (
          <img src={iconUrl} alt={placeholder} className='control__icon' />
        )}
        <label className='control__label'>{
          !!label && <p className='control__headeing'>{label}</p>
        }
          <input
            ref={this.inputRef}
            className='control__input'
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            autoComplete='off'
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeHolder: '',
  className: '',
  label: '',
};
