import { configureStore } from '@reduxjs/toolkit';
import { CounterRedux } from './CouterRedux.jsx';

const store = configureStore({
  reducer: CounterRedux,
});

export default store;
