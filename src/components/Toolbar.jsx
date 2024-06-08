import { useContext, useState } from 'react';
import ThemeContext from '../context/theme.js';
import ShowTheme from './ShowTheme.jsx';

export default function Toolbar() {
  const theme = useContext(ThemeContext);

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    background: theme === 'dark' ? 'blue' : 'Yellow',
    color: theme === 'dark' ? 'Yellow' : 'blue',
  };

  return (
    <div style={styles}>
      <ShowTheme />
    </div>
  );
}
