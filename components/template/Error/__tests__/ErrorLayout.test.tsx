import ErrorLayout from '../ErrorLayout';

import { render } from '@lib/testing-library';

describe('ErrorLayout', () => {
  test('renders correctly', () => {
    const errorLayout = render(<ErrorLayout />);
    expect(errorLayout).toBeTruthy();
  });
});
