import { render, screen } from '@testing-library/react';
import App from './App'; 
import DataProvider from './Context'; 


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ products: [{ /* Mock product data */ }] }),
  })
);

// Clear mock before each test
beforeEach(() => {
  fetch.mockClear();
});

test('renders App component with DataContext', async () => {
  render(
    <DataProvider>
      <App />
    </DataProvider>
  );


  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
