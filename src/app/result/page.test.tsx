import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/game.context';
import ResultPage from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/contexts/game.context', () => ({
  useGame: jest.fn(),
}));

describe('ResultPage', () => {
  const mockPush = jest.fn();
  const mockReplace = jest.fn();
  const mockSetScore = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      replace: mockReplace,
    });

    (useGame as jest.Mock).mockReturnValue({
      score: '$500',
      setScore: mockSetScore,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<ResultPage />);

    const image = screen.getByAltText('Main image');
    expect(image).toBeInTheDocument();

    const subtitle = screen.getByText('Total score:');
    expect(subtitle).toBeInTheDocument();

    const score = screen.getByText('$500');
    expect(score).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /try again/i });
    expect(button).toBeInTheDocument();
  });

  it('redirects to home page if no score is present', () => {
    (useGame as jest.Mock).mockReturnValue({
      score: '',
      setScore: mockSetScore,
    });

    render(<ResultPage />);

    expect(mockReplace).toHaveBeenCalledTimes(1);
    expect(mockReplace).toHaveBeenCalledWith('/');
  });

  it('resets score and navigates to home page when "Try Again" is clicked', () => {
    render(<ResultPage />);

    const button = screen.getByRole('button', { name: /try again/i });
    fireEvent.click(button);

    expect(mockSetScore).toHaveBeenCalledTimes(1);
    expect(mockSetScore).toHaveBeenCalledWith('');
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
