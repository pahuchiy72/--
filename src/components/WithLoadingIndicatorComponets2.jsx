import Joke from './Joke.jsx';
import Posts from './Posts.jsx';
import withLoadingIndicator2 from './withLoadingIndicator2.jsx';
 

const PostsWithLoadingIndicator2 = withLoadingIndicator2(Posts);
const JokeWithLoadingIndicator2 = withLoadingIndicator2(Joke)

export { PostsWithLoadingIndicator2, JokeWithLoadingIndicator2 };