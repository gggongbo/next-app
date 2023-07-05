import LinkBox from '../index';

import { fireEvent, render } from '@lib/testing-library';

describe('LinkBox', () => {
  test('renders correctly', () => {
    const router = 'test';
    const { getByTestId } = render(<LinkBox router={router}>linkbox</LinkBox>);

    expect(getByTestId('link')).toBeTruthy();
  });

  test('route correctly', () => {
    const router = 'test';
    const { getByTestId } = render(<LinkBox router={router}>linkbox</LinkBox>);

    expect(getByTestId('link').getAttribute('href')).toEqual(router);
  });

  test('calls onClick when click the linkbox', () => {
    const router = 'test';
    const onClick = jest.fn();

    const { getByTestId } = render(
      <LinkBox router={router} onClick={onClick}>
        linkbox
      </LinkBox>,
    );

    fireEvent.click(getByTestId('link'));
    expect(onClick).toHaveBeenCalled();
  });
});
