import Header from '../index';

import { render } from '@lib/testing-library';

describe('Header', () => {
  test('renders correctly', () => {
    const header = render(<Header />);
    expect(header).toBeTruthy();
  });
});
