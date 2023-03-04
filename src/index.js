import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PlanetsContextProvider } from './context/PlanetsProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PlanetsContextProvider>
      <App />
    </PlanetsContextProvider>,
  );
