import { useState } from 'react';
import Form from './Form.jsx';

function UserInput() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <h1
        style={{
          color: 'darkblue',
          fontSize: '20px',//розмір тексту
          fontStyle: 'italic',//стиль тексту тут з наклоном
          textShadow: '10px 10px 10px #000',// тінь тексту тут вниз і вліво
          fontWeight: 'bold',//текст жирний
        }}
      >
        Приклад форми
      </h1>
      <Form name={userName} email={email} handleChange={handleChange} />
    </div>
  );
}
export default UserInput;
