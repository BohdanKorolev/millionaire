'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home(): JSX.Element {
  const router = useRouter();

  const startGame = (): void => {
    router.push('/game');
  };

  return (
    <div className={styles.home}>
      <div className={`container ${styles.home__contatiner}`}>
        <div className={styles.home__image}>
          <Image
            src="/fingers.webp"
            width={452}
            height={357}
            alt="Main image"
          />
        </div>
        <div className={styles.home__content}>
          <h1 className={styles.home__title}>Who wants to be a millionaire?</h1>
          <Button text="Start" onClick={startGame} />
        </div>
      </div>
    </div>
  );
}
