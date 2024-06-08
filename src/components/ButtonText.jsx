import React from 'react';

export default class ButtonText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Натискай',
    
    };
  }

  handleOnClick = (e) => {
    const text = e.target.innerHTML === 'Натискай' ? 'Натиснута' : 'Натискай';

    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    const { color } = this.state;
    return (
      <button
        type="button"
        style={{
            backgroundColor:'Magenta',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '20px',
          border: 'none',
          color,
        }}
        onClick={this.handleOnClick}
      >
        {text}
      </button>
    );
  }
}
