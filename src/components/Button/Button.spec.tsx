import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button/Button';

it('fires the onClick event when clicked', () => {
  const handleClick = jest.fn();
  const label = 'Click me';

  render(<Button text={label} onClick={handleClick} />);

  const button = screen.getByText(label);
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(2);
});
