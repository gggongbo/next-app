import Layout from '../index';

import { render } from '@lib/testing-library';

describe('Layout', () => {
  test('renders correctly', () => {
    const layout = render(
      <Layout>
        <div>test</div>
      </Layout>,
    );
    expect(layout).toBeTruthy();
  });
});
