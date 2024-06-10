import styled from 'styled-components';

const ButtonStyle2 = styled.button`
  background-color: ${(active) => (active ? 'green' : 'red')};
  border-radius: 15px;
  color: white;
  margin: 5px;
  padding: 10px;
  width: 5rem;

  &:hover {
    background-color: blue;
  }
`;

const ButtonClick = ({onClick}) => {
  return (
    <ButtonStyle2 active={false} type="button" onClick={onClick}>
      Клікай
    </ButtonStyle2>
  );
};
export default ButtonClick;
