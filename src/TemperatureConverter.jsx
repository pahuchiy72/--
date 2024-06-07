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
      <button type="button" onClick={this.converterFahrenheit}>
        Перехід на Фаренгейт
      </button>
    );
    const temperatureFahrenheit = this.state.temperature + '°F по Фаренгейту';

    return (
      <div>
        <h1>Температура: {this.state.temperature}</h1>
        <input id="input1" placeholder="ввести температуру по Цельсію °С" />
        {temperatureCelsius}
        <input value={temperatureFahrenheit} readOnly="" />
      </div>
    );
  }
}
