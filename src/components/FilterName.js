import React, { useContext } from 'react';
import FilterNameContext from '../context/FilterNameContext';

function FilterName() {
  const { setFilterName } = useContext(FilterNameContext);
  const { selected,
    setSelected,
    // setFiltersSelected,
    // filtersSelected,
    // setArrayFilter,
    // arrayFilter,
    arrayObj,
    setArrayObj,
  } = useContext(FilterNameContext);
  // console.log(useContext(FilterNameContext));

  // const handleChange = (event) => {
  //   setFilterName(event.target.value);
  // }; // função para pegar o campo do input quando o usuário digitar.

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
        name="column"
        onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="operator"
        value={ selected.operator }
        onChange={ (e) => setSelected({ ...selected, operator: e.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
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
