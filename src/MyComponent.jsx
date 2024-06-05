import React from 'react';

export default class MyComponent extends React.Component {
  handleClick1 = (id) => {
    alert(`Button ${id} натиснуто`);
  };

  handleClick = () => {
    alert('Кнопка натиснута');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Натисни</button>
        <button onClick={() => this.handleClick1('Євген')}>ще тисни</button>
      </div>
    );
  }
}
