import React from 'react';

const withLoadingIndicator = (WrappedComponent) => {
  return class WithLoadingIndicator extends React.Component {
    state = { isLoading: true };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 10000);
    }
    render() {
      const { isLoading, ...props } = this.props;

      if (isLoading) {
        return <p>Завантажується чекайте...</p>;
      }
      return <WrappedComponent {...props} isLoading={this.state.isLoading} />;
    }
  };
};
export default withLoadingIndicator;
