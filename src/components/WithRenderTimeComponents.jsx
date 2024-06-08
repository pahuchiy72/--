import withRenderTime from './withRenderTime.jsx';
import Footer from './Footer.jsx';
import Joke from './Joke.jsx';
import Posts from './Posts.jsx';
import Color from './Color.jsx';

const FooterWithRenderTime = withRenderTime(Footer);
const JokeWithRenderTime = withRenderTime(Joke);
const PostsWithRenderTime = withRenderTime(Posts);
const ColorWithRenderTime = withRenderTime(Color);

export {
  FooterWithRenderTime,
  JokeWithRenderTime,
  PostsWithRenderTime,
  ColorWithRenderTime,
};
