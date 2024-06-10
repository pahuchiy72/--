import { useEffect, useState } from 'react';
import ButtonStyle from './ButtonStyle.jsx';

function Compo() {
  const [compo, setCompo] = useState('привіт');

  useEffect(() => {
    console.log('Комронент змонтувався');
    return () => {
      console.log('Комронент демонтувався');
    };
  }, [compo]);

  const Message = () => {
    setCompo(`${compo} привіт`);
  };
  return (
    <div>
      <p>{compo}</p>
      <ButtonStyle onClick={Message}> Привітайся</ButtonStyle>
    </div>
  );
}
export default Compo;
