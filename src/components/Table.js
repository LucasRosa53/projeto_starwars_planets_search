import React, { useContext } from 'react';
import FilterNameContext from '../context/FilterNameContext';
// import PlanetsContext from '../context/PlanetsContext';

function Table() {
  // const { planets } = useContext(PlanetsContext);
  const { arrayFilter } = useContext(FilterNameContext);
  console.log(arrayFilter);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>edited</th>
            <th>created</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { (arrayFilter !== 0 && arrayFilter)?.map((element) => (
            <tr key={ element.name }>
              <td data-testid="planet-name">
                { element.name }
              </td>
              <td>
                { element.rotation_period }
              </td>
              <td>
                { element.orbital_period }
              </td>
              <td>
                { element.diameter }
              </td>
              <td>
                { element.climate }
              </td>
              <td>
                { element.gravity }
              </td>
              <td>
                { element.terrain }
              </td>
              <td>
                { element.surface_water }
              </td>
              <td>
                { element.population }
              </td>
              <td>
                { element.films }
              </td>
              <td>
                { element.edited }
              </td>
              <td>
                { element.created }
              </td>
              <td>
                { element.url }
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
