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
      <p>Плюснув {count} раз</p>
      <button
        style={{
          backgroundColor: 'DarkCyan',
          border: 'none',
          color: 'DarkGrey',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
        }}
        onClick={increment}
      >
        Клікай в +
      </button>
      <p>Мінуснув {decremehtCount} раз</p>
      <button
        style={{
          backgroundColor: 'DarkCyan',
          border: 'none',
          color: 'DarkGrey',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
        }}
        onClick={decrement}
      >
        Клікай в -
      </button>
    </div>
  );
}
export default CounterFunc;
