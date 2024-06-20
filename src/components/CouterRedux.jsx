import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button/ButtonStyle2.jsx';

const ADD = 'ADD';
const SUB = 'SUB';
const ADDSOME = 'ADDSOME';
const SUBSOME = 'SUBSOME';
const RESET = 'RESET';

const addOne = () => ({ type: ADD });
const subOne = () => ({ type: SUB });
const addSome = (value) => ({ type: ADDSOME, payload: value });
const subSome = (value) => ({ type: SUBSOME, payload: value });
const reset = () => ({ type: RESET });

const CountReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + 1 };
    case SUB:
      return { counter: state.counter - 1 };
    case ADDSOME:
      return { counter: state.counter + action.payload };
    case SUBSOME:
      return { counter: state.counter - action.payload };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};

function CounterRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p>Рахувати : {counter}</p>
      <Button type="button" primary onClick={() => dispatch(addOne())}>
        Додати 1
      </Button>
      <Button type="button" onClick={() => dispatch(subOne())}>
        Відняти 1
      </Button>
      <button
        style={{
          position: 'absolute',
          padding: '7px',
          minHeight: '20px',
          minWidth: '80px',

          backgroundColor: '#0a0a23',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          boxShadow: '0px 0px 2px 2px rgb(0, 0, 0)',
        }}
        type="button"
        onClick={() => dispatch(addSome(10))}
      >
        Додати 10
      </button>
      <button type="button" onClick={() => dispatch(subSome(10))}>
        Відняти 10
      </button>
      <button type="button" onClick={() => dispatch(reset())}>
        Скинути лічильник
      </button>
    </div>
  );
}
export { CountReducer, CounterRedux };
