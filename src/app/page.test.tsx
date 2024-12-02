import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import HomePage from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HomePage', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main elements', () => {
    render(<HomePage />);

    const title = screen.getByText('Who wants to be a millionaire?');
    expect(title).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /start/i });
    expect(button).toBeInTheDocument();

    const image = screen.getByAltText('Main image');
    expect(image).toBeInTheDocument();
  });

  it('navigates to the game page on button click', () => {
    render(<HomePage />);

    const button = screen.getByRole('button', { name: /start/i });

    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/game');
  });
});
