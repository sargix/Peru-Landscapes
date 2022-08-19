import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'Layout/Root';
import AppProvider from 'Context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Root />
    </AppProvider>
  </React.StrictMode>
);
