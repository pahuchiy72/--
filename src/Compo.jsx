import { useEffect, useState } from 'react';

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
      <button onClick={Message}> Привітайся</button>
    </div>
  );
}
export default Compo;
