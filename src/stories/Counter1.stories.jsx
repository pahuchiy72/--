import Counter1 from '../components/Counter1';

export default {
  title: 'Counter1 Component',
  component: Counter1,
};

function TempLate() {
  return <Counter1 />;
}

export const Default = TempLate.bind({});
