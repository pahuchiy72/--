import { useEffect, useState } from 'react';

function Compo() {
  const [compo, setCompo] = useState(0);

  useEffect(() => {
    console.log('Комронент змонтувався');
    return () => {
      console.log('Комронент демонтувався');
    };
  });
  return (
    <div>
      <p>Натиснув {compo} разів</p>
      <button onClick={() => setCompo(compo + 1)}> Натискай</button>
    </div>
  );
}
export default Compo;
