import { useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';

const withLoadingIndicator2 = (Component) => {
  return function WithLoadingIndicator2(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 20000);
      return () => clearTimeout(timer);
    });
    return isLoading ? (
      <div>
        Завантажується трошки почекайте...
        <ClockLoader color="rgba(207, 54, 214, 1)" />
      </div>
    ) : (
      <Component {...props} />
    );
  };
};
export default withLoadingIndicator2;
