import Image from '../index';

import { render } from '@lib/testing-library';

describe('Image', () => {
  test('renders image correctly', () => {
    const image = render(
      <Image src="https://itbook.store/img/books/9781617291609.png" />,
    );
    expect(image).toBeTruthy();

    const style = getComputedStyle(image.getByTestId('image'));
    expect(style).toHaveProperty(
      'background-image',
      'url(https://itbook.store/img/books/9781617291609.png)',
    );
  });
});
