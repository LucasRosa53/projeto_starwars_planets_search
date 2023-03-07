import React from 'react';
import './App.css';
import { PlanetsContextProvider } from './context/PlanetsProvider';
import Table from './components/Table';
import FilterName from './components/FilterName';
// import FilterNameContext from './context/FilterNameContext';
import { FilterNameProvider } from './context/FilterNameProvider';

function App() {
  return (
    <div>
      <span>Hello, App!</span>
      <PlanetsContextProvider>
        <FilterNameProvider>
          <FilterName />
          <Table />
        </FilterNameProvider>
      </PlanetsContextProvider>
    </div>
  );
}

export default App;
