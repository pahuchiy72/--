import React from 'react';

 export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>щось пішло не так</h1>;
    }
    return this.props.children;
  }
}
