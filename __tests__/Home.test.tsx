import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../app/index';

test('Home screen renders welcome text', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Welcome to T1D Demo!')).toBeTruthy();
});
