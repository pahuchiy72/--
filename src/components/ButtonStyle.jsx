import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  border: 0;
  border-radius: 15;

  display: inline-block;

  color: white;
  background-color: green;

  &:hover {
    background-color: blue;
  }

  &:active {
    filter: brightness(1);
  }
`;
export default ButtonStyle;
