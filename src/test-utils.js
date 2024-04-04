import React from 'react';
import { render } from '@testing-library/react';
import DataProvider from './Context'; 

const customRender = (ui, options) =>
  render(ui, { wrapper: DataProvider, ...options });


export * from '@testing-library/react';


export { customRender as render };


