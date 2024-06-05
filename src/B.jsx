import React from 'react';

export default class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Натискай',
      backgroundColor: 'DarkGoldenRod',
    };
  }
  handleOnClick = () => {
    const { text, backgroundColor } = this.state;
    const isText = text === 'Натискай';
    const isDarkGoldenRod = backgroundColor === 'DarkGoldenRod';
    this.setState({
      text: isText ? 'Натискай' : 'Вже натиснуто',
      backgroundColor: isDarkGoldenRod ? 'DarkGoldenRod' : 'DarkTurquoise',
    });
  };

  render() {
    const { text, backgroundColor } = this.state;
    
    return (
      <button
        type="button"
        style={{backgroundColor }}
        onClick={this.handleOnClick}
      >
        {text}
      </button>
    );
  }
}
