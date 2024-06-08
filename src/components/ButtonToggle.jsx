import React from 'react';

export default class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Натискай', backgroundColor: 'DarkGoldenRod' };
  }
  handleOnClick = () => {
    const { text, backgroundColor } = this.state;
    const isText = text === 'Натискай';
    const isDarkGoldenRod = backgroundColor === 'DarkGoldenRod';
    this.setState({
      text: isText ? 'Вже натиснуто' : 'Натискай',
      backgroundColor: isDarkGoldenRod ? 'DarkTurquoise' : 'DarkGoldenRod',
    });
  };

  render() {
    const { text, backgroundColor } = this.state;

    return (
      <button
        type="button"
        style={{
          backgroundColor,
          borderRadius: '15px',
          height: '50px',
          width: '150px',
        }}
        onClick={this.handleOnClick}
      >
        {text}
      </button>
    );
  }
}
