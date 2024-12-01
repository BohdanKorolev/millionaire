'use client';

import { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/common/context/GameContext';
import { getLetterForIndex } from '@/common/utils/getLetterForIndex';
import QuestionButton from '@/app/game/components/QuestionButton/QuestionButton';
import RewardsList from '@/app/game/components/RewardsList/RewardsList';
import questions from '../../common/data/game.config.json';
import styles from './game.module.scss';

export default function Game(): JSX.Element {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { setScore } = useGame();
  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean, reward: string): void => {
    if (isCorrect) {
      setScore(reward);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        router.push(`/result`);
      }
    } else {
      router.push(`/result`);
    }
  };

  if (!currentQuestion) {
    return <h1>Sorry, no questions available.</h1>;
  }

  return (
    <div className={styles.game}>
      <div className={`${styles.game__content}`}>
        <p className={styles.game__content__text}>{currentQuestion.question}</p>
        <div className={styles.game__content__btns}>
          {currentQuestion.answers.map((answer, index) => (
            <QuestionButton
              key={answer.text}
              text={answer.text}
              indicatorText={getLetterForIndex(index)}
              onClick={() =>
                handleAnswer(answer.isCorrect, currentQuestion.reward)
              }
            />
          ))}
        </div>
      </div>
      <div
        className={`${styles.game__rewards} ${styles.game__rewards_desktop}`}
      >
        <RewardsList
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
        />
      </div>
    </div>
  );
}
