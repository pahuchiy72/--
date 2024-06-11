import ButtonStyle from './Button/ButtonStyle.jsx';
import Card from './Card.jsx';

export default function CardContainer() {

  return (
    <div>
      <Card title="Текст картки">
        <p>Картка з текстом</p>
      </Card>
      <Card title="кнопка картки">
        <ButtonStyle>Натискай</ButtonStyle>
      </Card>
    </div>
  );
}
