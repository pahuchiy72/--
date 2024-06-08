import React from 'react';

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'LawnGreen', backgroundColor: 'MediumBlue' };
  }

  changeColor = () => {
    const { color, backgroundColor } = this.state;
    const isLawnGreen = color === 'LawnGreen';
    const isMediumBlue = backgroundColor === 'MediumBlue';
    this.setState({
      color: isLawnGreen ? 'HotPink' : 'LawnGreen',
      backgroundColor: isMediumBlue ? 'MediumTurquoise' : 'MediumBlue',
    });
  };

  render() {
    const { color, backgroundColor } = this.state;
    const styles = {
      justifyContent: 'center',
      alighItems: 'center',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'flex',
      height: '100px',
      width: '100%',
    };
    return (
      <div style={styles}>
        <button
          type="button"
          style={{ color, backgroundColor }}
          onClick={this.changeColor}
        >
          Змінити колір на : {color} та {backgroundColor}
        </button>
      </div>
    );
  }
}
