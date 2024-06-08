import { useContext } from 'react';
import UserContext from '../context/user';

export default function Footer() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Ваші уподобання</h2>
      <p>Тема: {user.preferences.theme}</p>
      <p>Мова користувача: {user.preferences.language}</p>
    </div>
  );
}
