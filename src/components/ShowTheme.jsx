import { useContext } from 'react';
import ThemeContext from '../context/theme';

export default function ShowTheme() {
  const theme = useContext(ThemeContext);

  const themeTranslate = theme === 'dark' ? 'темна' : 'світла';

  return <p style={{ marginTop: 0 }}> Тема : {themeTranslate}</p>;
}
