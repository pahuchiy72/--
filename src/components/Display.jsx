import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <h1
        style={{
          justifyContent: 'center',
          color: 'Navy',
          backgroundColor: 'Violet',
          alignItems: 'center', //вирівнює текст внутрі
          textAlign: 'center',
          textDecoration: 'none',
          fontWeight: 'bold', // товщина тексту
          fontSize: '30px', //розмір тексту
          display: 'flex',
          height: '60px',//висота
          width: '60px',//довжина
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
