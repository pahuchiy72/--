import styled from 'styled-components';
import styles from './Button.module.css';

const ButtonStyle2 = styled.button`
  background-color: ${(props) => (props.primary ? 'green' : 'red')};
  border-radius: 15px;
  color: white;
  padding: 10px;
  padding: 10px;
  font-size: 16px
 
 
`;

function Button(props) {
  return (
    <button className={styles.button} type="button" {...props}>
      {props.children}
    </button>
  );
}
export { Button, ButtonStyle2 };
