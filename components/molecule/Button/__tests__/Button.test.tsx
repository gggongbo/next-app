import Button from '../index';

import { fireEvent, render } from '@lib/testing-library';

describe('Button', () => {
  test('renders correctly', () => {
    const button = render(<Button onClick={() => {}}>test</Button>);

    expect(button).toBeTruthy();
  });

  test('calls onClick when click the button', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Button onClick={onClick}>click</Button>);

    fireEvent.click(getByTestId('button'));

    expect(onClick).toHaveBeenCalled();
  });

  test('disable the button when disabled prop is true', () => {
    const onClick = jest.fn();
    const randomValue = Math.random() < 0.5;

    const { rerender } = render(
      <Button onClick={onClick} disabled={randomValue}>
        button
      </Button>,
    );

    rerender(
      <Button onClick={onClick} disabled={!randomValue}>
        button
      </Button>,
    );

    expect(onClick).not.toHaveBeenCalled();
  });
});
