import { useState } from 'react';

function CounterFunc2() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="counter">
      <button
        className="counter-button"
        style={{
          backgroundColor: 'Coral',
          color: 'PapayaWhip',
          alignItems: 'center', //вирівнює текст внутрі
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',

          borderRadius: '50%',
          height: '5em',
          width: '5em',
          fontWeight: 'bold', // товщина тексту
          fontSize: '12px', //розмір тексту
        }}
        onClick={increment}
      >
        +
      </button>
      <span
        className="counter-value"
        style={{ fontSize: '25px', fontWeight: 'bold' }}
      >
        {value}
      </span>
      <button
        className="text-10xl"
        style={{
          backgroundColor: 'Coral',
          color: 'PapayaWhip',
          fontSize: '12px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '50%',
          height: '5em',
          width: '5em',
          fontWeight: 'bold', // товщина тексту
          
        }}
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
}
export default CounterFunc2;
