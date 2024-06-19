import styled from 'styled-components';

const ButtonStyleRed = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  background-color: white;
  color: black;
  border: 2px solid red;

  &:hover {
    background-color: red;
    color: white;
  }
`;

export default ButtonStyleRed;
