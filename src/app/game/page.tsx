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
import styles from './page.module.scss';
import questions from '@/configs/game.config.json';
import { getLetterForIndex } from '@/utils/getLetterForIndex';
import QuestionButton from '@/app/game/QuestionButton/QuestionButton';
import RewardsList from '@/app/game/RewardsList/RewardsList';

export default function GamePage(): JSX.Element {
  // const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRewardsVisible, setIsRewardsVisible] = useState(false);
  const { setScore } = useGame();
  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     const { data } = await client.query({ query: GET_QUESTIONS });
  //     setQuestions(data.questions);
  //   };
  //   fetchQuestions();
  // }, []);

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

  const toggleRewardsVisibility = (): void => {
    setIsRewardsVisible((prev) => !prev);
  };

  if (!currentQuestion) {
    return <h1>Sorry, no questions available. Please try again later.</h1>;
  }

  return (
    <div className={styles.game}>
      <div className={`container ${styles.game__content}`}>
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
      <button
        type="button"
        className={styles.game__menu}
        onClick={toggleRewardsVisibility}
      >
        {isRewardsVisible ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3638 7.05025C18.7544 6.65972 18.7544 6.02656 18.3638 5.63603C17.9733 5.24551 17.3401 5.24551 16.9496 5.63603L11.9999 10.5858L7.05014 5.63606C6.65962 5.24554 6.02645 5.24554 5.63593 5.63606C5.2454 6.02659 5.2454 6.65975 5.63593 7.05028L10.5857 12L5.63591 16.9497C5.24539 17.3403 5.24539 17.9734 5.63591 18.364C6.02643 18.7545 6.6596 18.7545 7.05012 18.364L11.9999 13.4142L16.9496 18.364C17.3402 18.7545 17.9733 18.7545 18.3638 18.364C18.7544 17.9735 18.7544 17.3403 18.3638 16.9498L13.4141 12L18.3638 7.05025Z"
              fill="#1C1C21"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
              fill="#1C1C21"
            />
            <path
              d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
              fill="#1C1C21"
            />
            <path
              d="M5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
              fill="#1C1C21"
            />
          </svg>
        )}
      </button>
      <div
        className={`${styles.game__rewards} ${isRewardsVisible ? styles.game__rewards_show : ''}`}
      >
        <RewardsList
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
        />
      </div>
    </div>
  );
}
