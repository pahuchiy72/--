import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Switch from 'react-switch';

import Counter1 from './components/Counter1.jsx';
import CounterFunc from './components/CounterFunc.jsx';
import CounterFunc2 from './components/CounterFunc2.jsx';
import CounterReducers from './components/CounterReducers.jsx';
import { CounterRedux } from './components/CouterRedux.jsx';

import TemperatureConverter from './components/TemperatureConverter.jsx';
import MyComponent from './components/MyComponent.jsx';
import ButtonText from './components/ButtonText.jsx';
import ButtonToggle from './components/ButtonToggle.jsx';
import ButtonToggle2 from './components/ButtonToggle2.jsx';
import WelcomeComponent from './components/WelcomeComponent.jsx';
import Greeting from './components/Greeting.jsx';
import ErrorComponent from './components/ErrorComponent.jsx';
import UserProfile from './components/UserProfile.jsx';
import User from './components/User.jsx';
import UserInput from './components/UserInput.jsx';
import UserContext from './context/user.js';
import TeamList from './components/TeamList.jsx';

import Compo from './components/Compo.jsx';
import store from './store.js';
import ThemeContext from './context/theme.js';
import ModalContainer from './components/ModalContainer.jsx';
import CardContainer from './components/CardContainer.jsx';
import Toolbar from './components/Toolbar.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { JokeWithLoadingIndicator as Joke } from './components/WithLoadingIndicatorComponents.jsx';
import {
  PostsWithLoadingIndicator2 as Posts,
  CounterWithLoadingIndicator2 as Counter,
} from './components/WithLoadingIndicatorComponets2.jsx';
import {
  FooterWithRenderTime as Footer,
  ColorWithRenderTime as Color,
} from './components/WithRenderTimeComponents.jsx';
import JokeFetch from './components/JokeFetch.jsx';
import { Button } from './components/Button/ButtonStyle2.jsx';

function Welcome(props) {
  return <h1>Знову Вітаю {props.name} </h1>;
}
const users = {
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

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
    <div
      className="transition-colors duration-500
     bg-white  container mx-auto px-4
     dark:bg-gray-900 dark:text-white"
    >
      <ErrorBoundary>
        <Provider store={store}>
          <UserContext.Provider value={user}>
            <WelcomeComponent user={user} />
            <ErrorComponent error={error} />
            <Welcome name="Євгеній" />
            <ul className='flex '>
              <li className='m-auto'>
                <Greeting name="Україні!!!" />
              </li>
              <li className='m-auto'>
                <Greeting name="ЗСУ!!!" />
              </li>
              <li className='m-auto'>
                <Greeting name="Героям!!!" />
              </li>
            </ul>
            <BrowserRouter>
              <nav className="bg-gray-800 rounded-lg p-4">
                <ul className="text-white flex flex-wrap justify-center space-x-4">
                  <li>
                    <Link className="hover:underline" to="/counter">
                      Лічильник на класі
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" to="/counter1">
                      Лічильник 2 на класі
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" to="/counterFun">
                      Лічильник на функції
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" to="/counterF2">
                      Лічильник з value
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" to="/counterReducers">
                      Лічильник на Reducer
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" to="/counterRedux">
                      Лічильник на п'ять кнопок
                    </Link>
                  </li>
                  <li>
                    <Switch
                      checked={isDark}
                      uncheckedIcon="🌜"
                      checkedIcon="🌞"
                      height={24}
                      width={42}
                      onChange={(toggle) => setIsDark(toggle)}
                    />
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/counter1" element={<Counter1 />} />
                <Route path="/counterFun" element={<CounterFunc />} />
                <Route path="/counterF2" element={<CounterFunc2 />} />
                <Route path="/counterReducers" element={<CounterReducers />} />
                <Route path="/counterRedux" element={<CounterRedux />} />
              </Routes>
            </BrowserRouter>
            <BrowserRouter>
              <nav className="bg-yellow-500 rounded-lg p-4">
                <ul className="text-white flex flex-wrap justify-center space-x-4">
                  <li>
                    <Link className="hover:overline" to="/color">
                      Зміна кольорів
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:overline" to="/button">
                      Кнопки alert
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:overline" to="/buttonText">
                      Кнопка з поверненням
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:overline" to="/buttonToggle">
                      Кнопка складніша
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:overline" to="/buttoncss">
                      Кнопка зі стилю
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:overline" to="/buttonToggle2">
                      Кнопка складна
                    </Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/color" element={<Color />} />
                <Route path="/button" element={<MyComponent />} />
                <Route path="/buttonText" element={<ButtonText />} />
                <Route path="/buttonToggle" element={<ButtonToggle />} />
                <Route path="/buttoncss" element={<Button />} />
                <Route path="/buttonToggle2" element={<ButtonToggle2 />} />
              </Routes>
            </BrowserRouter>
            <BrowserRouter>
              <nav className="bg-rose-800 rounded-lg p-4">
                <ul className="text-white flex flex-wrap justify-center space-x-4">
                  <li>
                    <Link className="hover:line-through" to="/posts">
                      Пости
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:line-through" to="/joke">
                      Жарти про Чака Норріса
                    </Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/joke" element={<Joke />} />
              </Routes>
            </BrowserRouter>
            <BrowserRouter>
              <nav className="bg-green-800 rounded-lg p-4">
                <ul className="text-white flex flex-wrap justify-center space-x-4">
                  <li>
                    <Link className="hover:bg-rose-600" to="/modal">
                      Приклади моделі
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:bg-orange-600" to="/card">
                      Картки
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:bg-lime-400" to="/userInput">
                      Приклад Форми
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:bg-cyan-500" to="/footer">
                      Уподобання користувача
                    </Link>
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
              <nav className="bg-blue-800 rounded-lg p-4">
                <ul className="text-white flex flex-wrap justify-center space-x-4">
                  <li>
                    <Link className="hover:text-yellow-400" to="/compo">
                      Приклади з консолем
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-emerald-300" to="/userProfile">
                      Профіль користувача
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-fuchsia-600" to="/user">
                      Приклади входу
                    </Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="compo" element={<Compo />} />
                <Route
                  path="/userProfile"
                  element={<UserProfile user={user} />}
                />
                <Route path="/user" element={<User users={users} />} />
              </Routes>
            </BrowserRouter>
            <ThemeContext.Provider value={colorTheme}>
              <BrowserRouter>
                <nav className="bg-yellow-800 rounded-lg p-4">
                  <ul className="text-white flex flex-wrap justify-center space-x-4 ">
                    <li>
                      <Link className="underline hover:decoration-4" to="/list">
                        Чемпіонат Європи
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-2xl" to="/temperature">
                        Конвектор температури
                      </Link>
                    </li>
                    <li>
                      <Link className=" hover:font-bold" to="/tolbar">
                        Приклад ThemeContext зміна теми
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Routes>
                  <Route path="list" element={<TeamList teams={teams} />} />
                  <Route
                    path="/temperature"
                    element={<TemperatureConverter />}
                  />
                  <Route path="/tolbar" element={<Toolbar />} />
                </Routes>
              </BrowserRouter>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={toogleTheme}
              >
                Панель інструментів
              </button>
            </ThemeContext.Provider>

            <JokeFetch />
          </UserContext.Provider>
        </Provider>
      </ErrorBoundary>

      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
      <button
        type="button"
        class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5
         text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500
          dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path
            d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 
          0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 
          1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
      <button
        type="button"
        class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex 
        items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800
         dark:hover:bg-blue-500"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path
            d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 
          0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 
          1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
