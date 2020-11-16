import React, { Component } from 'react';
import './style.scss';

class Input extends Component {
  state = {
    openDrop: false,
    presentValue: '',
    value: '',
  };

  inputRef = React.createRef();

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.inputRef.current.classList.add('typing');
      if (this.props.value === '') {
        this.inputRef.current.classList.remove('typing');
      }
    }
  }

  render() {
    const {
      type = 'text',
      name,
      placeHolder = 'place Holder',
      value,
      required,
    } = this.props;

    return (
      <div className='input-div' onBlur={this.close} tabIndex={-1}>
        <div className='input'>
          <input
            className='input-type'
            ref={this.inputRef}
            type={type}
            required={required}
            name={name}
            onChange={this.props.handleChange}
            value={value}
          />

          <label className='place-holder'>{placeHolder}</label>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Input;
