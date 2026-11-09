/*import React from 'react';
import { render } from '@testing-library/react-native';

import { Text } from '../..';

const mockOpenUrl = jest.fn(url => Promise.resolve(url));

describe('<Text />', () => {
  beforeEach(() => {
    mockOpenUrl.mockClear();

    jest.doMock('react-native/Libraries/Linking/Linking', () => ({
      openURL: mockOpenUrl,
    }));
  });

  it('should render children', async () => {
    const { getByText } = await render(<Text>Potato</Text>);

    expect(getByText('Potato')).toBeTruthy();
  });

  it('should render custom styles', async () => {
    const style = { color: 'papayawhip' };

    const { getByText } = await render(<Text style={style}>Potato</Text>);

    expect(getByText('Potato')).toHaveStyle(style);
  });
});
*/