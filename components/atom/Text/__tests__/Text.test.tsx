import Text from '../index';

import { render } from '@lib/testing-library';

describe('Text', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Text>test</Text>);

    expect(getByText('test')).toBeTruthy();
  });

  test('renders props correctly', () => {
    const size = 10;
    const weigth = 'normal';
    const lineHeight = 1.2;
    const ellipsis = true;

    const { getByTestId, rerender } = render(
      <Text
        size={size}
        weight={weigth}
        lineHeight={lineHeight}
        ellipsis={ellipsis}
      >
        test
      </Text>,
    );
    const ellipsisStyle = getComputedStyle(getByTestId('text'));

    expect(ellipsisStyle).toHaveProperty('font-size', '10px');
    expect(ellipsisStyle).toHaveProperty('font-weight', 'normal');
    expect(ellipsisStyle).toHaveProperty('line-height', '1.2');
    expect(ellipsisStyle).toHaveProperty('white-space', 'nowrap');
    expect(ellipsisStyle).toHaveProperty('overflow', 'hidden');
    expect(ellipsisStyle).toHaveProperty('word-wrap', 'break-word');
    expect(ellipsisStyle).toHaveProperty('text-overflow', 'ellipsis');

    rerender(
      <Text
        size={size}
        weight={weigth}
        lineHeight={lineHeight}
        ellipsis={!ellipsis}
      >
        test
      </Text>,
    );

    const noEllipsisStyle = getComputedStyle(getByTestId('text'));

    expect(noEllipsisStyle).toHaveProperty('font-size', '10px');
    expect(noEllipsisStyle).toHaveProperty('font-weight', 'normal');
    expect(noEllipsisStyle).toHaveProperty('line-height', '1.2');
    expect(noEllipsisStyle).not.toHaveProperty('white-space', 'nowrap');
    expect(noEllipsisStyle).not.toHaveProperty('overflow', 'hidden');
    expect(noEllipsisStyle).not.toHaveProperty('word-wrap', 'break-word');
    expect(noEllipsisStyle).not.toHaveProperty('text-overflow', 'ellipsis');
  });
});
