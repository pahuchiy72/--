import React from 'react';
import ReactDom from 'react-dom/client';

import Counter from './Counter.jsx';
import Counter1 from './Counter1.jsx';
import Color from './Color.jsx';
import TemperatureConverter from './TemperatureConverter.jsx';
import MyComponent from './MyComponent.jsx';
import ButtonToggle from './ButtonToggle.jsx';
import B from './B.jsx';


function Welcome(props) {
  return <h1>Знову Вітаю {props.name} </h1>;
}

class Greeting extends React.Component {
  componentDidMount() {
    console.log('компонент змонтувався');
  }

  componentDidUpdate() {
    console.log('комронент обновився');
  }

  componentWillUnmount() {
    console.log('компонент демонтувався');
  }
  render() {
    return <h1 style={{ color: 'blue' , background: 'Gold'}}>Слава, {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="Євгеній" />
      <Greeting name="Україні!!!" />
      <Greeting name="ЗСУ!!!" />
      <TemperatureConverter />
      <ButtonToggle />
      <B />
      <Counter />
      <Counter1 />
      <Color />
      <MyComponent />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(App());
