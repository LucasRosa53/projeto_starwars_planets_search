import React, { useContext } from 'react';
import FilterNameContext from '../context/FilterNameContext';

function FilterName() {
  const { setFilterName } = useContext(FilterNameContext);
  console.log(useContext(FilterNameContext));

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
    </div>
  );
}

export default FilterName;
