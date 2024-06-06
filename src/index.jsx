import React from 'react';
import ReactDom from 'react-dom/client';

import Counter from './Counter.jsx';
import Counter1 from './Counter1.jsx';
import Color from './Color.jsx';
import TemperatureConverter from './TemperatureConverter.jsx';
import MyComponent from './MyComponent.jsx';
import ButtonText from './ButtonText.jsx';
import ButtonToggle from './ButtonToggle.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import Greeting from './Greeting.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import UserProfile from '../UserProfile.jsx';

function Welcome(props) {
  return <h1>Знову Вітаю {props.name} </h1>;
}
const user = {
  name: "М'ячмен",
  isLoggedIn: true,
};

const error = {
  message: 'Щось пішло не так?',
};

function App() {
  return (
    <div>
      <WelcomeComponent user={user} />
      <Welcome name="Євгеній" />
      <Greeting name="Україні!!!" />
      <Greeting name="ЗСУ!!!" />
      <TemperatureConverter />
      <ButtonToggle />
      <ButtonText />
      <Counter />
      <Counter1 />
      <Color />
      <MyComponent />
      <UserProfile user={user}/>
      <ErrorComponent error={error} />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(App());
