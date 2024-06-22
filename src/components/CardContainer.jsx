import ButtonStyle from './Button/ButtonStyle.jsx';
import Card from './Card.jsx';

export default function CardContainer() {

  return (
    <div>
      <Card title="Текст картки">
        <p className='border-2 text-fuchsia-700 font-bold border-emerald-400 bg-emerald-200 
            p-2 inline-block'>Картка з текстом</p>
      </Card>
      <Card title="кнопка картки">
        <ButtonStyle className='button'>Натискай</ButtonStyle>
      </Card>
    </div>
  );
}
// onClick={alert('Приклад форми карток')}