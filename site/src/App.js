import React, { Component } from 'react';
import AddTodo from './components/AddTodo/';
import logo from './assets/logo.svg';
import './App.scss';

const App = () => {
  return (
    <section className="main_sec">
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </nav>
      <div className="container">
        {/* <div className="img_sec">
            <img src={ay} alt="Ayodelejayne" />
          </div> */}
        <div className="text_sec">
          <div className="todo-list">
            <h1 className="center blue-text">
              Hello, thank you for wanting to know more. Please include your
              contact details below so we can send the copy to your email.
            </h1>
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
};

export default App;
