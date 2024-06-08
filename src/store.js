import { configureStore } from '@reduxjs/toolkit';
import { CounterRedux } from './components/CouterRedux.jsx';

const store = configureStore({
  reducer: CounterRedux,
});

export default store;
