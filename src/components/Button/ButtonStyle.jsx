import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  border: 0;

  border-radius: 15px;
  height: 50px;
  width: 100px;
  display: inline-block;

  color: white;
  background-color: green;

  &:hover {
    background-color: blue;
  }
`;
export default ButtonStyle;
