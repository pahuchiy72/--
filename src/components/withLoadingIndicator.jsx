import React from 'react';
import { PacmanLoader } from 'react-spinners';

const withLoadingIndicator = (WrappedComponent) => {
  return class WithLoadingIndicator extends React.Component {
    state = { isLoading: true };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 20000);
    }
    render() {
      const { isLoading, ...props } = this.props;

      if (isLoading) {
        return (
          <p>
            Завантажується чекайте...
            <PacmanLoader color="#1caf46" margin={2} />
          </p>
        );
      }
      return <WrappedComponent {...props} isLoading={this.state.isLoading} />;
    }
  };
};
export default withLoadingIndicator;
