import Image from '../index';

import { render } from '@lib/testing-library';

describe('Image', () => {
  test('renders image correctly', () => {
    const image = render(<Image src="https://www.29cm.co.kr" />);
    expect(image).toBeTruthy();

    const style = getComputedStyle(image.getByTestId('image'));
    expect(style).toHaveProperty(
      'background-image',
      'url(https://www.29cm.co.kr)',
    );
  });
});
