import { render, screen, fireEvent } from '@testing-library/react';
import { GameProvider, useGame } from './game.context';
import { FC } from 'react';

const TestComponent: FC = () => {
  const { score, setScore } = useGame();

  return (
    <div>
      <p data-testid="score">{score}</p>
      <button onClick={() => setScore('100')} data-testid="update-score">
        Update Score
      </button>
    </div>
  );
};

describe('GameProvider', () => {
  it('should provide default score value', () => {
    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    const scoreElement = screen.getByTestId('score');
    expect(scoreElement.textContent).toBe('');
  });

  it('should update the score correctly', () => {
    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    const scoreElement = screen.getByTestId('score');
    const buttonElement = screen.getByTestId('update-score');

    fireEvent.click(buttonElement);

    expect(scoreElement.textContent).toBe('100');
  });

  it('should throw error when useGame is used outside GameProvider', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrowError(
      'useGame must be used within a GameProvider',
    );

    consoleErrorSpy.mockRestore();
  });
});
