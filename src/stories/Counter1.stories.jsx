import React from 'react';
import Counter1 from '../components/Counter1.jsx';

export default {
  title: 'Лічильник 2 на класі Component',
  component: Counter1,
};

function TempLate() {
  return <Counter1 />;
}

export const Default = TempLate.bind({});
