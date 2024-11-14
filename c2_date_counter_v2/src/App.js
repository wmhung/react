import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const d = new Date();
  d.setDate(d.getDate() + count);

  function handleReset() {
    setStep(0);
    setCount(1);
  }
  return (
    <div className='App'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step} // the value of input is controlled by step state
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
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

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
