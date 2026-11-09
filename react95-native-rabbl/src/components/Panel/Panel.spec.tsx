/*import React from 'react';
import { render } from '@testing-library/react-native';

import { testId } from './Panel';
import { Panel, Text } from '../..';

describe('<Panel />', () => {
  it('should render children', async () => {
    const { getByTestId } = await render(
      <Panel>
        <Text>Banana dance</Text>
      </Panel>,
    );

    expect(getByTestId(testId)).toHaveTextContent('Banana dance');
  });

  it('should render custom styles', async () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = await render(
      <Panel style={style}>
        <Text>Panel</Text>
      </Panel>,
    );

    expect(getByTestId(testId)).toHaveStyle(style);
  });
});
*/