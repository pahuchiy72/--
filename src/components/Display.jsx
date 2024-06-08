import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <h1
        style={{
          justifyContent: 'center',
          color: 'Navy',
          backgroundColor: 'Violet',
          alighItems: 'center',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'flex',
          height: '50px',//висота
          width: '50px',//довжина
          borderRadius: '10px',
          overflow: 'hidden',//щоб текст не вилазив за контейнер
        //   wordBreak: 'break-all',// переносить текст  ниже
        }}
      >
        {this.props.count}
      </h1>
    );
  }
}
