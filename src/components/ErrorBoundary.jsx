import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1
          className="mb-2 mt-0 text-5xl font-medium leading-tight  
           shadow-black bg-lime-200 italic text-red-900"
        >
          щось пішло не так 🤬 а а а що робити !?!?
        </h1>
      );
    }
    return this.props.children;
  }
}
