import styled from 'styled-components';
import styles from './Button.module.css';

const ButtonStyle3 = styled.button`
  background-color: ${(props) => (props.primary ? 'chocolate' : 'black')};
  border-radius: 15px;
  color: white;
  padding: 10px;
  padding: 10px;
  font-size: 16px
 
}
`;

function Button2(props) {
  return (
    <button
      className={props.primary ? styles.primary : styles.button}
      {...props}
    >
      {props.children}
    </button>
  );
}
export { Button2, ButtonStyle3 };
