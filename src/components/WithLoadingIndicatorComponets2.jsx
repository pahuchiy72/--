import Counter from './Counter.jsx';
import Posts from './Posts.jsx';
import withLoadingIndicator2 from './withLoadingIndicator2.jsx';
 

const PostsWithLoadingIndicator2 = withLoadingIndicator2(Posts);
const CounterWithLoadingIndicator2 = withLoadingIndicator2(Counter)

export { PostsWithLoadingIndicator2, CounterWithLoadingIndicator2 };