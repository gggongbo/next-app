import InputText from '../index';

import { render } from '@lib/testing-library';

describe('InputText', () => {
  test('renders correctly', () => {
    const randomValue: number = Math.random();

    const { getByTestId, rerender } = render(<InputText value={randomValue} />);

    expect(getByTestId('inputtext')).toBeTruthy();

    rerender(<InputText value={randomValue} isArea />);

    expect(getByTestId('textarea')).toBeTruthy();
  });
});
