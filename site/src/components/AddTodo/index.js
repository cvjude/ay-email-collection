import React, { useRef, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import useInput from '../../Hooks/useInput';
import data from '../../data';
import Input from '../Input';
import './style.scss';

const AddTodo = () => {
  const submitButton = useRef();
  const { addToast } = useToasts();
  const [recorded, setRecorded] = useState();

  const [handleSubmit, handleChange, inputTypes, validateSelf] = useInput({
    inputs: data,
    submitButton,
    initials: {},
    btnText: {
      loading: 'Submitting...',
      reg: 'SUbmit',
    },
    cb: async (inputs) => {
      addToast('Successfully Recorded', {
        appearance: 'success',
        autoDismiss: true,
      });

      submitButton.current.children[0].innerHTML = 'Submit';
      submitButton.current.disabled = false;
      submitButton.current.classList.remove('loader');
    },
  });

  return (
    <div className="todo-item altra">
      <form onSubmit={handleSubmit}>
        <div className="inputz">
          {data.map((form, i) => (
            <Input
              key={`login_form_${i}`}
              name={form.name}
              type={form.type}
              itype={form.itype}
              placeHolder={form.placeHolder}
              value={inputTypes[form.name]}
              errorMsg={form.errorMsg}
              required={form.required}
              handleChange={handleChange}
              validateSelf={validateSelf}
              inputs={form.select}
              label={form.label}
              showAsterix={false}
            />
          ))}
        </div>
        <button ref={submitButton}>
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
