import React from 'react';

const withLoadingIndicator = (WrappedComponent) => {
  return class WithLoadingIndicator extends React.Component {
    render() {
      const { isLoading, ...restProps} = this.props;

      if (isLoading) {
        return (
          <div>
            <p>Завантажується трошки почекайте...</p>
          </div>
        );
      }
      return <WrappedComponent {...restProps} />
    }
  };
};
export default withLoadingIndicator;
