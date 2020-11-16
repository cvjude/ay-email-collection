import React, { useEffect, useState } from 'react';
import { validateInput, validate } from '../../helpers';
import './style.scss';

const Input = ({
  type = 'text',
  name,
  placeHolder = 'place Holder',
  value,
  required,
  validateSelf,
  handleChange,
  shouldValidate = true,
  errorMsg,
}) => {
  const [error, setError] = useState(false);
  const inputRef = React.createRef();

  useEffect(() => {
    if (validateSelf && required) {
      const isValid = validate(value, name);

      if (!isValid) {
        inputRef.current.classList.add('typing', 'invalid');
        setError(true);
      }
    }

    return () => {};
  }, [inputRef, name, validateSelf, value, required]);

  useEffect(() => {
    if (value === '' || !value) {
      inputRef.current.classList.remove('typing');
    } else {
      inputRef.current.classList.add('typing');

      const isValid = validate(value, name);

      if (!isValid) {
        inputRef.current.classList.add('invalid');
        setError(true);
      } else {
        inputRef.current.classList.add('valid');
      }
    }
    return () => {};
  }, [value, inputRef, name, required]);

  const validateOne = (event) => {
    handleChange(event, error);
    if (shouldValidate) {
      if (!validateInput(event)) {
        inputRef.current.classList.add('invalid');
        setError(true);
      } else {
        inputRef.current.classList.remove('invalid');
        setError(false);
      }
    }
  };

  return (
    <div className="input-div" tabIndex={-1}>
      <div className="input">
        <input
          className="input-type"
          ref={inputRef}
          type={type}
          required={required}
          name={name}
          onChange={validateOne}
          value={value}
        />

        <label className="place-holder">{placeHolder}</label>
        <span></span>
      </div>
      <p className="error" style={{ display: error ? 'block' : 'none' }}>
        {errorMsg}
      </p>
    </div>
  );
};

export default Input;
