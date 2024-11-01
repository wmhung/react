import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [count, setCounter] = useState(0);

  const d = new Date();
  d.setDate(d.getDate() + count);

  function addHandler() {
    setStep((currentStep) => currentStep + 1);
  }
  function subtractHandler() {
    setStep((currentStep) => currentStep - 1);
  }
  function counterAdd() {
    setCounter((currentCounter) => currentCounter + 1);
    if (step > 0) {
      setCounter((currentCounter) => (currentCounter += step - 1));
    }
  }
  function counterSubtract() {
    setCounter((currentCounter) => currentCounter - 1);
    if (step > 0 || step < 0) {
      setCounter((currentCounter) => (currentCounter += step + 1));
    }
  }

  return (
    <div className='App'>
      <div className='button-container'>
        <button onClick={subtractHandler}>-</button>
        <span>Step: {step}</span>
        <button onClick={addHandler}>+</button>
      </div>
      <div className='button-container'>
        <button onClick={counterSubtract}>-</button>
        <span>Count: {count}</span>
        <button onClick={counterAdd}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : count < 0
            ? `${count} days ago was `
            : null}
        </span>
        <span>{d.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
