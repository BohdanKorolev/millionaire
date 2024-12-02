import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/game.context';
import GamePage from './page';
import questions from '@/configs/game.config.json';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/contexts/game.context', () => ({
  useGame: jest.fn(),
}));

jest.mock('@/app/game/RewardsList/RewardsList', () => () => (
  <div data-testid="rewards-list" />
));

jest.mock('@/app/game/QuestionButton/QuestionButton', () => (props: any) => (
  <button data-testid="question-button" onClick={props.onClick}>
    {props.indicatorText} {props.text}
  </button>
));

describe('GamePage Component', () => {
  const mockSetScore = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useGame as jest.Mock).mockReturnValue({
      setScore: mockSetScore,
    });
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the first question and answers', () => {
    render(<GamePage />);
    const questionText = screen.getByText(questions[0].question);
    expect(questionText).toBeInTheDocument();

    const answerButtons = screen.getAllByTestId('question-button');
    expect(answerButtons).toHaveLength(questions[0].answers.length);
  });

  it('renders the RewardsList component', () => {
    render(<GamePage />);
    const rewardsList = screen.getByTestId('rewards-list');
    expect(rewardsList).toBeInTheDocument();
  });
});
