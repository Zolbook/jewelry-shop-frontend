
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import TestWrapper from './test-utils'; 

test('renders learn react link', () => {
  render(
    <TestWrapper>
      <App />
    </TestWrapper>
  );
  
});
