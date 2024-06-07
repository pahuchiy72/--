import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Counter from './Counter.jsx';
import Counter1 from './Counter1.jsx';
import CounterFunc from './CounterFunc.jsx';
import CounterFunc2 from './CounterFunc2.jsx';
import CounterReducer from './CounterReducer.jsx';
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
import UserInput from './UserInput.jsx';
import UserContext from './context/user.js';
import TeamList from './TeamList.jsx';
import Posts from './Posts.jsx';
import Joke from './Joke.jsx';
import Compo from './Compo.jsx';

import ThemeContext from './context/theme.js';
import ModalContainer from './ModalContainer.jsx';
import CardContainer from './CardContainer.jsx';
import Toolbar from './Toolbar.jsx';
import Footer from './Footer.jsx';

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
  const [colorTheme, setColorTheme] = useState('light');
  const toogleTheme = () => {
    const newTheme = colorTheme === 'dark' ? 'light' : 'dark';
    setColorTheme(newTheme);
  };
  const [user, setUser] = useState({
    names: 'Євген',
    email: 'pahuchiy72@ukr.net',
    preferences: {
      theme: 'світла',
      language: 'українська',
    },
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <WelcomeComponent user={user} />
        <ErrorComponent error={error} />
        <Welcome name="Євгеній" />
        <Greeting name="Україні!!!" />
        <Greeting name="ЗСУ!!!" />

        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/counter">Лічильник на класі</Link>
              </li>
              <li>
                <Link to="/counter1">Лічильник 2 на класі</Link>
              </li>
              <li>
                <Link to="/counterFun">Лічильник на функції</Link>
              </li>
              <li>
                <Link to="/counterF2">Лічильник з value</Link>
              </li>
              <li>
                <Link to="/counterReducer">Лічильник на Reducer</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter1" element={<Counter1 />} />
            <Route path="/counterFun" element={<CounterFunc />} />
            <Route path="/counterF2" element={<CounterFunc2 />} />
            <Route path="/counterReducer" element={<CounterReducer />} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/color">Зміна кольорів</Link>
              </li>
              <li>
                <Link to="/button">Кнопки alert</Link>
              </li>
              <li>
                <Link to="/buttonText">Кнопка з поверненням</Link>
              </li>
              <li>
                <Link to="/buttonToggle">Кнопка складніша</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/color" element={<Color />} />
            <Route path="/button" element={<MyComponent />} />
            <Route path="/buttonText" element={<ButtonText />} />
            <Route path="/buttonToggle" element={<ButtonToggle />} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/posts">Пости</Link>
              </li>
              <li>
                <Link to="/joke">Жарти про Чака Норріса</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/joke" element={<Joke />} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/modal">Приклади моделі</Link>
              </li>
              <li>
                <Link to="/card">Картки</Link>
              </li>
              <li>
                <Link to="/userInput">Приклад Форми</Link>
              </li>
              <li>
                <Link to="/footer">Уподобання користувача</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/modal" element={<ModalContainer />} />
            <Route path="/card" element={<CardContainer />} />
            <Route path="/userInput" element={<UserInput />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/compo">Приклади з консолем</Link>
              </li>
              <li>
                <Link to="/userProfile">Профіль користувача</Link>
              </li>
              <li>
                <Link to="/user">Приклади входу</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="compo" element={<Compo />} />
            <Route path="/userProfile" element={<UserProfile user={user} />} />
            <Route path="/user" element={<User user={user} />} />
          </Routes>
        </BrowserRouter>
        <ThemeContext.Provider value={colorTheme}>
          <BrowserRouter>
            <nav>
              <ul>
                <li>
                  <Link to="/list">Чемпіонат Європи</Link>
                </li>
                <li>
                  <Link to="/temperature">Конвектор температури</Link>
                </li>
                <li>
                  <Link to="/tolbar">Приклад ThemeContext зміна теми </Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="list" element={<TeamList teams={teams} />} />
              <Route path="/temperature" element={<TemperatureConverter />} />
              <Route path="/tolbar" element={<Toolbar />} />
            </Routes>
          </BrowserRouter>
          <button type="button" onClick={toogleTheme}>
            Панель інструментів
          </button>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
