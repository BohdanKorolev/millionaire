'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage(): JSX.Element {
  const router = useRouter();

  const startGame = (): void => {
    router.push('/game');
  };

  return (
    <div className={styles.home}>
      <div className={`container ${styles.home__contatiner}`}>
        <div className={styles.home__image}>
          <Image
            src="/images/hand.webp"
            width={452}
            height={357}
            alt="Main image"
          />
        </div>
        <div className={styles.home__content}>
          <h2 className={styles.home__title}>Who wants to be a millionaire?</h2>
          <Button text="Start" onClick={startGame} />
        </div>
      </div>
    </div>
  );
}
