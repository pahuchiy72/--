import React from "react";
import Display from "./Display.jsx";

export default class Counter1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    incremehtCount = () => {
      this.setState((prevState)=>({ count: prevState.count + 1 }));
    };
  
    decremehtCount = () => {
        this.setState((prevState)=>({ count: prevState.count - 1 }));
    };
  
    componentDidMount() {
      console.log('Початок дії');
    }
  
    componentDidUpdate() {
      console.log('Зміна дії');
    }
  
    render() {
      return (
        <div className="flex space-x-4">
          <Display count={this.state.count} />
          <button
            style={{
              backgroundColor: 'Indigo',
              border: 'none',
              color: 'Magenta',
              padding: '15px 32px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              borderRadius: '20px',
              
            }}
            onClick={this.incremehtCount}
          >
            Додати
          </button>
          <button
            style={{
              backgroundColor: 'OrangeRed',
              border: 'none',
              color: 'Sienna',
              padding: '15px 32px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              borderRadius: '20px',
            }}
            onClick={this.decremehtCount}
          >
            Відняти
          </button>
        </div>
      );
    }
  }
  