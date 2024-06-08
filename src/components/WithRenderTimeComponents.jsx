import withRenderTime from './withRenderTime.jsx';
import Footer from './Footer.jsx';

import Color from './Color.jsx';

const FooterWithRenderTime = withRenderTime(Footer);

const ColorWithRenderTime = withRenderTime(Color);

export { FooterWithRenderTime, ColorWithRenderTime };
