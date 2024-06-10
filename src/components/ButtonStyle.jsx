import styled from "styled-components";

const ButtonStyle = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
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
