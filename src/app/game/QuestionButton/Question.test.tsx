import { render, screen, fireEvent } from '@testing-library/react';
import QuestionButton, { IQuestionBtnProps } from './QuestionButton';

describe('QuestionButton Component', () => {
  const defaultProps: IQuestionBtnProps = {
    text: 'Sample Text',
    indicatorText: '1',
    onClick: jest.fn(),
  };

  it('renders correctly with given props', () => {
    render(<QuestionButton {...defaultProps} />);
    expect(screen.getByText('Sample Text')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(<QuestionButton {...defaultProps} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the SVG element', () => {
    render(<QuestionButton {...defaultProps} />);
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toBeInTheDocument();
  });
});
