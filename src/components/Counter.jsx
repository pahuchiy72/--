import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incremehtCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decremehtCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    console.log('Початок дії');
  }

  componentDidUpdate() {
    console.log('Зміна дії');
  }

  render() {
    return (
      <div className="flex space-x-4">
        <h1
          style={{
            justifyContent: 'center',
            color: 'DarkOrchid',
            backgroundColor: 'Chartreuse',
            fontWeight: 'bold', // товщина тексту
            fontSize: '25px', //розмір тексту
            alignItems: 'center', //вирівнює текст внутрі
            textDecoration: 'none',
            display: 'flex',
            height: '50px', //висота
            width: '50px', //довжина
            borderRadius: '15px',
            overflow: 'hidden',
          }}
        >
          {this.state.count}
        </h1>
        <button
          style={{
            backgroundColor: 'Green' /* зелений */,
            border: 'none',
            color: 'Ivory',
            alignItems: 'center', //вирівнює текст внутрі
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            height: '50px', //висота
            width: '205px', //довжина
            borderRadius: '10px',
          }}
          onClick={this.incremehtCount}
        >
          Кнопка додавання
        </button>
        <button
          style={{
            backgroundColor: 'red' /* червоний */,
            border: 'none',
            color: 'Ivory',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            height: '50px', //висота
            width: '205px', //довжина
            borderRadius: '10px',
          }}
          onClick={this.decremehtCount}
        >
          Кнопка віднімання
        </button>
      </div>
    );
  }
}
