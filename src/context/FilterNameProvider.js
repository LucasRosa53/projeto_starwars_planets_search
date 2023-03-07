import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FilterNameContext from './FilterNameContext';
import PlanetsContext from './PlanetsContext';

export function FilterNameProvider({ children }) {
  const { planets } = useContext(PlanetsContext); // array de planetas.
  const [filterName, setFilterName] = useState(''); // estado criado para filtrar o nome dos planetas.
  const [arrayFilter, setArrayFilter] = useState([]); // estado que controla o array de planetas.

  useEffect(() => {
    const tratarDados = () => {
      setArrayFilter(planets.filter((planet) => planet.name.toLowerCase()
        .includes(filterName.toLowerCase())));
    };
    tratarDados();
  }, [filterName, planets]); // função criada para filtrar o nome dos planetas( tratarDados() ).

  return (
    <FilterNameContext.Provider value={ { filterName, setFilterName, arrayFilter } }>
      { children }
    </FilterNameContext.Provider>
  );
}

FilterNameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
