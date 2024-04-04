
import React from 'react';
import App from './App';
import { render, screen } from './test-utils'; 

test('renders learn react link', () => {
  render(<App />); // Use the custom render function
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
