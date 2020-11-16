import React, { Component } from 'react';
import AddTodo from './components/AddTodo/';
import ay from './assets/ay-2.png';
import logo from './assets/logo.svg';
import './App.scss';

class App extends Component {
  state = {
    todos: [],
    total: 0,
  };

  render() {
    return (
      <section className="main_sec">
        <nav>
          <img src={logo} alt="logo" />
        </nav>
        <div className="container">
          <div className="img_sec">
            <img src={ay} alt="Ayodelejayne" />
          </div>
          <div className="text_sec">
            <div className="todo-list">
              <h1 className="center blue-text">Hi there</h1>
              <AddTodo />
            </div>
          </div>
        </div>

        <div className="small">
          <small>powered by Jude chinoso</small>
          <small>jjchinosoviolet@gmail.com</small>
          <small>view my projects at https://github.com/cvjude</small>
        </div>
      </section>
    );
  }
}

export default App;
