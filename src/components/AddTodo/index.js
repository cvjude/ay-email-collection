import React, { Component } from 'react';
import Input from '../Input';
import './style.scss';

export class AddTodo extends Component {
  state = {
    content: { name: '', quantity: '', price: '' },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevstate) => ({
      content: {
        ...prevstate.content,
        [name]: value,
      },
    }));
  };

  hanleSubmit = (e) => {
    e.preventDefault();
    const { name, quantity, price } = this.state.content;
    if (!name || !quantity || !price) return;
    this.props.addTodo(this.state);
    this.setState({
      content: { name: '', quantity: '', price: '' },
    });
  };

  render() {
    return (
      <div className="todo-item altra">
        <form onSubmit={this.hanleSubmit}>
          <div className="inputz">
            <Input
              handleChange={this.handleChange}
              value={this.state.content.name}
              placeHolder="Full Name"
              name="name"
            />
            <Input
              handleChange={this.handleChange}
              value={this.state.content.quantity}
              placeHolder="Phone Number"
              name="quantity"
              type="number"
            />
            <Input
              handleChange={this.handleChange}
              value={this.state.content.price}
              placeHolder="Email"
              name="email"
              type="email"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
