import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FilterNameContext from './FilterNameContext';
import PlanetsContext from './PlanetsContext';

// const arrayObj = [];
export function FilterNameProvider({ children }) {
  const { planets } = useContext(PlanetsContext); // array de planetas.
  const [filterName, setFilterName] = useState(''); // estado criado para filtrar o nome dos planetas.
  const [arrayFilter, setArrayFilter] = useState([]); // estado que controla o array de planetas.
  const [filtersSelected, setFiltersSelected] = useState([]); // estado para controlar os novos filtros.
  const [arrayObj, setArrayObj] = useState([]);
  const [selected, setSelected] = useState({ // estado criado para usar nos inputs.
    column: 'population',
    operator: 'maior que',
    value: 0,
  });
  // console.log(selected);
  // const tratarDados = () => {
  // }; // função criada para filtrar o nome dos planetas( tratarDados() )

  const tratarFiltros = () => {
    // console.log(arrayObj);
    const filterPlanetsName = (planets.filter((planet) => planet.name.toLowerCase()
      .includes(filterName.toLowerCase())));
    setArrayFilter(filterPlanetsName);
    // return filterPlanetsName;
    const numberFilter = filterPlanetsName.filter((planet) => {
      const newPlanets = arrayObj.map((filter) => {
        switch (filter.operator) {
        case 'maior que':
          // console.log(filter.value);
          return Number(planet[filter.column]) > Number(filter.value);
        case 'menor que':
          return Number(planet[filter.column]) < Number(filter.value);
        default:
          return Number(planet[filter.column]) === Number(filter.value);
        }
      });
      // console.log(newPlanets);
      return newPlanets.every((el) => el);
    });
    // console.log(numberFilter);
    return setArrayFilter(numberFilter);
  };
  useEffect(() => {
    // tratarDados();
    tratarFiltros();
  }, [filterName, planets, arrayObj]);

  return (
    <FilterNameContext.Provider
      value={ { filterName,
        filtersSelected,
        setFiltersSelected,
        setFilterName,
        arrayFilter,
        setSelected,
        arrayObj,
        setArrayObj,
        selected } }
    >
      { children }
    </FilterNameContext.Provider>
  );
}

FilterNameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
