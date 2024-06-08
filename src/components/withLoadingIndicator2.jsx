import { useEffect, useState } from "react"

const withLoadingIndicator2 = (Component) => {
    return function WithLoadingIndicator2(props) {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(()=> {
            const timer = setTimeout(() => setIsLoading(false), 10000);
            return() => clearTimeout(timer);
        });
        return isLoading ? <div>Завантажується трошки почекайте...</div> : <Component {...props} />
    }
}
export default withLoadingIndicator2;