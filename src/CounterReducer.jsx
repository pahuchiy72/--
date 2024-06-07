import { useReducer } from 'react';

const initialState = 0;

function CounterReducer() {
  function counterReducer(state, action) {
    switch (action.type) {
      case 'ДОДАВАТИ':
        return state + 1;
      case 'ВІДНІМАТИ':
        return state - 1;
      case 'СКИДАННЯ':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter">
      <br />
      <button
        style={{
          backgroundColor: 'Aquamarine',
          border: 'none',
          color: 'DarkSlateGray',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
        }}
        onClick={() => dispatch({ type: 'ДОДАВАТИ' })}
      >
        +
      </button>

      <button
        style={{
          backgroundColor: 'Aquamarine',
          border: 'none',
          color: 'DarkSlateGray',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
        }}
        onClick={() => dispatch({ type: 'ВІДНІМАТИ' })}
      >
        -
      </button>
      <br />
      <button
        style={{
          backgroundColor: 'Aquamarine',
          border: 'none',
          color: 'DarkSlateGray',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
        }}
        onClick={() => dispatch({ type: 'СКИДАННЯ' })}
      >
        Скинути
      </button>
      <h1>Лічильник: {state}</h1>
    </div>
  );
}
export default CounterReducer;
