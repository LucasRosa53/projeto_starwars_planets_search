import React, { useContext } from 'react';
import FilterNameContext from '../context/FilterNameContext';
import { arrayOperator } from '../service/arrayOperator';

function FilterName() {
  const { selected,
    setFilterName,
    setSelected,
    arraysColumn,
    arrayObj,
    setArrayObj,
  } = useContext(FilterNameContext);

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
    </div>
  );
}
// setArrayfilters = {};

export default FilterName;
