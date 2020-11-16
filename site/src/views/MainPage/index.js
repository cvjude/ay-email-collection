import React, { useState } from 'react';
import AddTodo from '../../components/AddTodo/';

const App = () => {
  const [recorded, setRecorded] = useState();

  return (
    <section className="main_sec">
      <div className="container">
        <div className="text_sec">
          <div className="todo-list">
            <h1 className="center blue-text">
              {recorded
                ? 'Thank you for your response.'
                : `Hello, thank you for wanting to know more. Please include your
              contact details below so we can send the copy to your email.`}
            </h1>
            {!recorded && <AddTodo setRecorded={setRecorded} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
