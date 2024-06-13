import React from 'react';

export default class Greeting extends React.Component {
  componentDidMount() {
    console.log('компонент змонтувався');
  }

  componentDidUpdate() {
    console.log('комронент обновився');
  }

  componentWillUnmount() {
    console.log('компонент демонтувався');
  }
  render() {
    return (
      <div >
      <h1 
        style={{
          width: '200px',
          height: '30px',
          color: 'yellow',
          background: 'blue',
          textAlign: 'center',
          margin: '0 auto', // об'єкт по центру
        
        }}
      >
        Слава {this.props.name}
      </h1>
      </div>
    );
  }
}
