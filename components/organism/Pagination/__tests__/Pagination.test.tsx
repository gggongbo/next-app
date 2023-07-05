import Pagination from '../index';

import { render } from '@lib/testing-library';

describe('Pagination', () => {
  test('renders correctly', () => {
    const pageLength = 10;
    const pageSize = 3;
    const currentPage = 1;
    const basePath = '/test';
    const page = render(
      <Pagination
        pageLength={pageLength}
        pageSize={pageSize}
        currentPage={currentPage}
        basePath={basePath}
      />,
    );
    expect(page).toBeTruthy();
  });
});
