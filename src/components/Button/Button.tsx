import { JSX } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button(props: IButtonProps): JSX.Element {
  function onClick(): void {
    props.onClick();
  }

  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {props.text}
    </button>
  );
}
