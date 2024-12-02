'use client';

// const GET_QUESTIONS = gql`
//   query GetQuestions {
//     questions {
//       id
//       question
//       answers {
//         text
//         isCorrect
//       }
//       reward
//     }
//   }
// `;

import { useState } from 'react';
import { useGame } from '@/contexts/game.context';
import { useRouter } from 'next/navigation';
import styles from './game.module.scss';
import questions from '@/configs/game.config.json';
import { getLetterForIndex } from '@/utils/getLetterForIndex';
import QuestionButton from '@/app/game/QuestionButton/QuestionButton';
import RewardsList from '@/app/game/RewardsList/RewardsList';

export default function GamePage(): JSX.Element {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [isRewardsVisible, setIsRewardsVisible] = useState(false);
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

  // const toggleRewardsVisibility = (): void => {
  //   setIsRewardsVisible((prev) => !prev);
  // };

  if (!currentQuestion) {
    return <h1>Sorry, no questions available. Please try again later.</h1>;
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
      <div className={styles.game__rewards}>
        <RewardsList
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
        />
      </div>
    </div>
  );
}
