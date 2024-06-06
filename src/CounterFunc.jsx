import { useState } from 'react';

function CounterFunc() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Клікнув{count} раз</p>
      <button onClick={increment}>Клікай</button>
    </div>
  );
}
export default CounterFunc;