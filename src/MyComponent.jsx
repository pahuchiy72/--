import React from 'react';

export default class MyComponent extends React.Component {
  handleClick = () => {
    alert('Кнопка натиснута');
  };

  render() {
    return <button onClick={this.handleClick}>Натисни</button>;
  }
}
