'use client';

import { JSX, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.scss';
import { useGame } from '@/contexts/game.context';
import Button from '@/components/Button/Button';

export default function ResultPage(): JSX.Element {
  const router = useRouter();
  const { score, setScore } = useGame();

  useEffect(() => {
    if (!score) {
      router.replace('/');
    }
  }, [score, router]);

  const restartGame = (): void => {
    router.push('/');
    setScore('');
  };

  return (
    <div className={styles.result}>
      <div className={`container ${styles.result__contatiner}`}>
        <div className={styles.result__image}>
          <Image
            src="/images/hand.webp"
            width={452}
            height={357}
            alt="Main image"
          />
        </div>
        <div className={styles.result__content}>
          <div>
            <p className={styles.result__subtitle}>Total score:</p>
            <h2 className={styles.result__title}>{score}</h2>
          </div>
          <Button text="Try Again" onClick={restartGame} />
        </div>
      </div>
    </div>
  );
}
