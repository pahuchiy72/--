import { useState } from 'react';

function CounterFunc() {
  const [count, setCount] = useState(0);
  const [decremehtCount, setDecremehtCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setDecremehtCount(decremehtCount - 1);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: 'DarkCyan',
          border: 'none',
          color: 'GreenYellow',
          height: '40px', //висота
          width: '140px', //довжина
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '8px',
          marginLeft: '10px',
        }}
        onClick={increment}
      >
        Клікай в +
        <span
          class="inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold
           text-blue-800 bg-blue-200 rounded-full"
        >
          {count}
        </span>
        раз
      </button>

      <button
        style={{
          backgroundColor: 'DarkCyan',
          border: 'none',
          color: 'GreenYellow',
          height: '40px', //висота
          width: '140px', //довжина
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '8px',
          marginLeft: '10px',
        }}
        onClick={decrement}
      >
        Клікай в -
        <span
          class="inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold
           text-blue-800 bg-blue-200 rounded-full"
        >
          {decremehtCount}
        </span>
        раз
      </button>
    </div>
  );
}
export default CounterFunc;
