import React from 'react';
import ButtonText from '../components/ButtonText';


export default {
  title: 'Кнопка з поверненням Component',
  component: ButtonText,
  tags: ["autodocs"],
};

const TempLate = args =>  <ButtonText {...args}/>;


export const Default = TempLate.bind({});
