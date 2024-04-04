

import React from 'react';
import { render } from '@testing-library/react';
import { DataContext } from './path/to/your/DataContext'; 

const AllTheProviders = ({ children }) => {
  return (
    <DataContext.Provider value={{ products: [] }}> 
      {children}
    </DataContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });


export * from '@testing-library/react';


export { customRender as render };

