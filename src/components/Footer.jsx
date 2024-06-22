import { useContext } from 'react';
import UserContext from '../context/user';

export default function Footer() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2 className='border-2 text-rose-700 font-bold border-sky-400 bg-sky-200 
            p-2 inline-block rounded-xl'>Ваші уподобання</h2>
      <p className='border-2 text-rose-700 font-bold border-sky-400 bg-sky-200 
            p-2 inline-block rounded-xl'>Тема: {user.preferences.theme}</p>
      <p className='border-2 text-rose-700 font-bold border-sky-400 bg-sky-200 
            p-2 inline-block rounded-xl'>Мова користувача: {user.preferences.language}</p>
    </div>
  );
}
