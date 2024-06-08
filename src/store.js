import { configureStore } from '@reduxjs/toolkit';
import { CountReducer } from './components/CouterRedux.jsx';

const store = configureStore({
  reducer: CountReducer,
});

export default store;
