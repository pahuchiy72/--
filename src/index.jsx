import React from 'react';
import ReactDom from 'react-dom/client';
 

import Counter from './Counter.jsx';
import Counter1 from './Counter1.jsx';
import CounterFunc from './CounterFunc.jsx';
import Color from './Color.jsx';
import TemperatureConverter from './TemperatureConverter.jsx';
import MyComponent from './MyComponent.jsx';
import ButtonText from './ButtonText.jsx';
import ButtonToggle from './ButtonToggle.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import Greeting from './Greeting.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import UserProfile from './UserProfile.jsx';
import User from './User.jsx';
import TeamList from './TeamList.jsx';
import Posts from './Posts.jsx';

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

const teams = [
  { id: 1, name: 'Бельгія', odds: 48.5 },
  { id: 2, name: 'Словаччина', odds: 14.4 },
  { id: 3, name: 'Румунія', odds: 18.3 },
  { id: 4, name: 'Україна', odds: 26.0 },
];

function App() {
  return (
    <div>
      <WelcomeComponent user={user} />
      <MyComponent />
      <User user={user} />
      <UserProfile user={user} />
      <ErrorComponent error={error} />
      <Welcome name="Євгеній" />
      <Greeting name="Україні!!!" />
      <Greeting name="ЗСУ!!!" />
      <TemperatureConverter />
      <ButtonToggle />
      <ButtonText />
      <Counter />
      <Counter1 />
      <CounterFunc />
      <Color />
      <TeamList teams={teams} />
      <Posts />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(App());