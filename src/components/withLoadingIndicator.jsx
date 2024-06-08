import { useEffect, useRef } from 'react';

const withLoadingIndicator = () => {
  return function WithLoadingIndicator(props) {
    const isLoading = useRef(performance.now());

    useEffect(() => {
      if (isLoading) {
        return (
          <div>
            <p>Завантажується трошки почекайте...</p>
          </div>
        );
      }
    });
  };
};
 export default withLoadingIndicator;