import { useContext } from 'react';
import ThemeContext from '../context/theme';

export default function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'dark' ? 'black' : 'white' }}>
     Панель інструментів
    </div>
  );
}
