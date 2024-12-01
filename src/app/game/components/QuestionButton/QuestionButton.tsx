import React, { JSX } from 'react';
import styles from './QuestionButton.module.scss';

export interface IQuestionBtnProps {
  text: string;
  indicatorText: string;
  onClick: () => void;
}

export default function QuestionButton(props: IQuestionBtnProps): JSX.Element {
  const onClick = (): void => {
    props.onClick();
  };

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <svg
        className={styles.button__svg}
        width="405"
        height="72"
        viewBox="0 0 405 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={styles.svg__hands} d="M388 36L405 36" />
        <path className={styles.svg__hands} d="M0 36L17 36" />
        <path
          className={styles.svg__body}
          d="M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28015 366.283 5.28343L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z"
        />
      </svg>
      <p className={styles.button__text}>
        <span className={styles.button__text__indicator}>
          {props.indicatorText}
        </span>
        <span>{props.text}</span>
      </p>
    </button>
  );
}
