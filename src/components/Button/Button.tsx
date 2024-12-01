import { JSX } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button(props: IButtonProps): JSX.Element {
  return (
    <button type="button" onClick={props.onClick} className={styles.button}>
      {props.text}
    </button>
  );
}
