import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import { getChamadaApi } from '../service/fetchPlanets';

// 2 - criar provider
export function PlanetsContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const FilterPlanets = async () => {
      const planetsApi = await getChamadaApi();
      const { results } = planetsApi;
      results.forEach((element) => delete element.residents);
      console.log(planetsApi);
      setPlanets(results);
    };
    FilterPlanets();
  }, []);
  return (
    <PlanetsContext.Provider value={ { planets, setPlanets } }>
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
