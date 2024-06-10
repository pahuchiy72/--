import React from 'react';
import ButtonStyle from './ButtonStyle.jsx';

export default class ButtonToggle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Тисни' };
  }
  handleOnClick = () => {
    const text = this.state;
    const isText = text === 'Тисни';

    this.setState({
      text: isText ? 'Натиснув' : 'Тисни',
    });
  };

  render() {
    const text = this.state;

    return (
      <ButtonStyle type="button" onClick={this.handleOnClick}>
        {text}
      </ButtonStyle>
    );
  }
}
