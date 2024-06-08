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
    <div className='counter'>
     
      <button className='counter-button'
        style={{
          backgroundColor: 'Coral',
          border: 'none',
          color: 'PapayaWhip',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
        }}
        onClick={increment}
      >
         +
      </button>
      <span className='counter-value'>{value}</span>
      <button className='counter-button'
        style={{
          backgroundColor: 'Coral',
          border: 'none',
          color: 'PapayaWhip',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
        }}
        onClick={decrement}
      >
         -
      </button>
    </div>
  );
}
export default CounterFunc2;