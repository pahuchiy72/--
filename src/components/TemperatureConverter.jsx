import React from 'react';

export default class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
  }

  converterFahrenheit = () => {
    this.setState({
      temperature: (document.getElementById('input1').value * 9) / 5 + 32,
    });
  };
  render() {
    const temperatureCelsius = (
      <button
        type="button"
        style={{
          backgroundColor: 'DarkGrey',
          color: '#333',
          border: '2px solid #ccc',
          padding: '10px',
        }}
        onClick={this.converterFahrenheit}
      >
        Перехід на Фаренгейт
      </button>
    );
    const temperatureFahrenheit = this.state.temperature + '°F по Фаренгейту';

    return (
      <div>
        <h1
          style={{
            color: 'darkmagenta',
            backgroundColor: 'blanchedalmond',
            fontSize: '200%',
            textAlign: 'center',
            fontFamily: 'Arial, Verdana, sans-serif',
            width: '595px',
          }}
        >
          Температура: {this.state.temperature}
        </h1>
        <input
          id="input1"
          style={{
            backgroundColor: '#eee',
            color: '#333',
            border: '2px solid #ccc',
            padding: '10px',
          }}
          placeholder="ввести температуру по Цельсію °С"
        />
        {temperatureCelsius}
        <input
          style={{
            backgroundColor: '#eee',
            color: '#333',
            border: '2px solid #ccc',
            padding: '10px',
          }}
          value={temperatureFahrenheit}
          readOnly=""
        />
      </div>
    );
  }
}
