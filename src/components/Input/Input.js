import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

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
    } = this.props;
    const { isFocused } = this.state;
    const controlInputWrapper = `control__input-wrapper ${
      isFocused ? "control__input-wrapper--focused" : ""
    } ${className}`;

    return (
      <label className="control__label">
        {!!label && <p className="control__headering">{label}</p>}
        <div className={controlInputWrapper} onClick={this.focusControl}>
          {!!iconUrl && (
            <img src={iconUrl} alt={placeholder} className="control__icon" />
          )}
          <input
            ref={this.inputRef}
            className="control__input"
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            autoComplete="off"
          />
        </div>
      </label>
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
  label: PropTypes.string
};

Input.defaultProps = {
  iconUrl: "",
  type: "text",
  placeHolder: "",
  className: "",
  label: ""
};
