import { useContext, useState } from 'react';
import ThemeContext from './context/theme'; 

export default function Toolbar() {
  const theme = useContext(ThemeContext);
  const [text, setText] = useState('темна');
  // const [colorTheme, setColorTheme] = useState('light');

  const toogle = () => {
    setText(!text);
  };
  // const toogleTheme = () => {
  //   const newTheme = colorTheme  === 'dark' ? 'light' : 'dark';
  //   setColorTheme(newTheme);
  // };
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
     <button type="button" onClick={toogle}>
        Панель інструментів {text === 'темна' ? 'світла' : 'темна'}
      </button>
    </div>
  );
}
// const [toogleTheme, setToogleTheme] = useState('light');
// const changeTheme = () => {
//   const newTheme = toogleTheme === 'dark' ? 'light' : 'dark';
//   setToogleTheme(newTheme);
// }
