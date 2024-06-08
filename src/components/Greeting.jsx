import React from "react";

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
        <h1 style={{ color: 'blue', background: 'Gold' }}>
          Слава, {this.props.name}
        </h1>
      );
    }
  }