import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorSchemeContextProvider } from './contexts/ColorSchemeContext';
import { NavbarPageSelectionContextProvider } from './contexts/NavbarContext';
import { DevlogPostContextProvider } from './contexts/DevlogPostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorSchemeContextProvider>
    <NavbarPageSelectionContextProvider>
      <DevlogPostContextProvider>
        <App />
      </DevlogPostContextProvider>
    </NavbarPageSelectionContextProvider>
  </ColorSchemeContextProvider>
);
