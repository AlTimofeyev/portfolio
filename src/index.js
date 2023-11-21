import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavbarPageSelectionContextProvider } from './contexts/NavbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavbarPageSelectionContextProvider>
    <App />
  </NavbarPageSelectionContextProvider>
);
