import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import AddTodo from '../../components/AddTodo/';

const App = () => {
  const [recorded, setRecorded] = useState();

  return (
    <section className="main_sec">
      <div className="container">
        <div className="text_sec">
          <div className="todo-list">
            <div className="img_sc">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="center blue-text">
              {recorded
                ? 'Thank you for your response.'
                : `Hello, thank you for wanting to know more. AyodeleJayne as a brand has alot of new and exciting offerings in the works including ‘early bird’ goodies. We’ll tell you all about it in our email when you subscribe below`}
            </h1>
            {!recorded && <AddTodo setRecorded={setRecorded} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
