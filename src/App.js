import React from 'react';
import './App.css';
import { PlanetsContextProvider } from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <span>Hello, App!</span>
      <PlanetsContextProvider>
        <Table />
      </PlanetsContextProvider>
    </div>
  );
}

export default App;
