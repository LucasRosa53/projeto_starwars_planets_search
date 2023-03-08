import React, { useContext } from 'react';
import FilterNameContext from '../context/FilterNameContext';
import { arrayOperator } from '../service/arrayOperator';

function FilterName() {
  const { selected,
    // filtersSelected,
    setFilterName,
    setSelected,
    arraysColumn,
    arrayObj,
    setArrayObj,
    removeFiltro,
    removeTudo,
  } = useContext(FilterNameContext);
  console.log(arrayObj);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Digite o nome de um planeta..."
        onChange={ (e) => setFilterName(e.target.value) }
      />
      <select
        data-testid="column-filter"
        value={ selected.column }
        name="column"
        onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
      >
        {arraysColumn.map((e) => (
          <option key={ e } value={ e }>{e}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="operator"
        value={ selected.operator }
        onChange={ (e) => setSelected({ ...selected, operator: e.target.value }) }
      >
        {arrayOperator.map((e) => (
          <option key={ e } value={ e }>{e}</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ selected.value }
        onChange={ (e) => setSelected({ ...selected, value: e.target.value }) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          setArrayObj([...arrayObj, selected]);
        } }
      >
        Filtrar
      </button>
      {arrayObj?.map((filter) => (
        <div data-testid="filter" key={ filter.column }>
          {`${filter.column}`}
          {`${filter.operator}`}
          {`${filter.value}`}
          <button
            onClick={ () => removeFiltro(filter.column) }
          >
            X
          </button>
        </div>
      ))}
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => removeTudo() }
      >
        Remover Filtros
      </button>
    </div>
  );
}
// setArrayfilters = {};

export default FilterName;
