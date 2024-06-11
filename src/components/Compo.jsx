import { useEffect, useState } from 'react';
import { Button } from './Button/ButtonStyle2.jsx';

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
      <Button onClick={Message}> Привітайся</Button>
    </div>
  );
}
export default Compo;
