import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FilterNameContext from './FilterNameContext';
import PlanetsContext from './PlanetsContext';
import { arrayColumn } from '../service/arrayColumn';
// import { arrayOperator } from '../service/arrayOperator';
// const arrayObj = [];
export function FilterNameProvider({ children }) {
  const { planets } = useContext(PlanetsContext); // array de planetas.
  const [filterName, setFilterName] = useState(''); // estado criado para filtrar o nome dos planetas.
  const [arrayFilter, setArrayFilter] = useState([]); // estado que controla o array de planetas.
  // console.log(arrayFilter);
  const [filtersSelected, setFiltersSelected] = useState([]); // estado para controlar os novos filtros.
  const [arraysColumn, setArraysColumn] = useState(arrayColumn);
  const [arrayObj, setArrayObj] = useState([]);
  // const [arraySort, setArraySort] = useState([]);
  const [selected, setSelected] = useState({ // estado criado para usar nos inputs.
    column: '',
    operator: 'maior que',
    value: 0,
  });
  // console.log(selected);
  // const tratarDados = () => {
  // }; // função criada para filtrar o nome dos planetas( tratarDados() )

  const removeTudo = () => {
    setArrayObj([]);
    setArraysColumn(arrayColumn);
  };

  const removeFiltro = (linha) => {
    setArraysColumn((prev) => [...prev, linha]);
    setArrayObj(arrayObj.filter((filtro) => filtro.column !== linha));
  };

  const tratarColumns = () => {
    const removeColumn = arraysColumn.filter((coluna) => coluna !== selected.column);
    setArraysColumn(removeColumn);
  };

  const tratarFiltros = () => {
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
    setArrayFilter(numberFilter);
  };
  // const funcSort = () => {
  //   const menosUm = -1;
  //   const ordered = arrayFilter.sort((a, b) => {
  //     if (arrayFilter[a.name] > arrayFilter[b.name]) {
  //       return 1;
  //     }
  //     if (arrayFilter[a.name] < arrayFilter[b.name]) {
  //       return menosUm;
  //     }
  //     return 0;
  //   });
  //   console.log(ordered);
  // };

  useEffect(() => {
    if (arrayObj.length > 0) {
      tratarColumns();
    }
  }, [arrayObj]);

  useEffect(() => {
    setSelected((prev) => ({ ...prev, column: arraysColumn[0] }));
  }, [arraysColumn]);

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
        selected,
        arraysColumn,
        setArraysColumn,
        removeFiltro,
        removeTudo } }
    >
      { children }
    </FilterNameContext.Provider>
  );
}

FilterNameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
