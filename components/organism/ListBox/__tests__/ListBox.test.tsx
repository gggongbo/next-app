import ListBox from '../index';

import { render } from '@lib/testing-library';

describe('ListBox', () => {
  test('renders correctly', () => {
    const data = [1, 2, 3];
    const renderItem = () => <div>listbox</div>;
    const { getByTestId } = render(
      <ListBox data={data} renderItem={renderItem} />,
    );
    expect(getByTestId('listitem-0')).toBeTruthy();
  });
});
