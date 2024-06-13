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
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={increment}
      >
        +
      </button>
      <span
        className="counter-value"
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          alignItems: 'center', //вирівнює текст внутрі
          paddingRight: '9px',
        }}
      >
        {value}
      </span>
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
}
export default CounterFunc2;
