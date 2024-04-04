
import React from 'react';
import { DataContext } from './Context'; 

const TestWrapper = ({ children }) => {
  const testValue = {
    products: [] 
  
  };

  return (
    <DataContext.Provider value={testValue}>
      {children}
    </DataContext.Provider>
  );
};

export default TestWrapper;
