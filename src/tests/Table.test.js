import React from "react";
import { render, screen } from '@testing-library/react';
import Table from "../components/Table";
import userEvent from "@testing-library/user-event";
import { fetchPlanets } from "../service/fetchPlanets";
import mockApi from "../tests/mockApi";
import PlanetsProvider from "../context/PlanetsProvider";
import FilterNameProvider from "../context/FilterNameProvider";
import App from "../App";
import { type } from "@testing-library/user-event/dist/type";
import { act } from "react-dom/test-utils";

describe('testando componente Table', () =>{
it('testa aplicação inteira', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockApi)
    });
        render(<App />)
    expect(screen.getByText('Hello, App!'))
    const filterName = await screen.findByTestId("name-filter")
        userEvent.type(filterName, 'Tatooine')
        expect(await screen.findByText('Tatooine')).toBeInTheDocument()
        const columnFilter = screen.getByTestId("column-filter")
        const comparisonFilter = screen.getByTestId("comparison-filter")
        const valueFilter = screen.getByTestId("value-filter")
        userEvent.selectOptions(columnFilter, 'population')
        userEvent.selectOptions(comparisonFilter, 'maior que')
        userEvent.clear(valueFilter)
        userEvent.type(valueFilter, '1000')
        const buttonFilter = screen.getByTestId("button-filter")
        userEvent.click(buttonFilter)
        expect(screen.getByText('populationmaior que1000')).toBeInTheDocument()
        
        // testando filtro diametro
        const columnFilter2 = screen.getByTestId("column-filter")
        const comparisonFilter2 = screen.getByTestId("comparison-filter")
        const valueFilter2 = screen.getByTestId("value-filter")
        userEvent.selectOptions(columnFilter, 'diameter')
        userEvent.selectOptions(comparisonFilter, 'menor que')
        userEvent.clear(valueFilter)
        userEvent.type(valueFilter, '12120')
        const buttonFilter2 = screen.getByTestId("button-filter")
        userEvent.click(buttonFilter)
        expect(screen.getByText('diametermenor que12120')).toBeInTheDocument()

        // testando filtro igual que
        const columnFilter3 = screen.getByTestId("column-filter")
        const comparisonFilter3 = screen.getByTestId("comparison-filter")
        const valueFilter3 = screen.getByTestId("value-filter")
        userEvent.selectOptions(columnFilter, 'rotation_period')
        userEvent.selectOptions(comparisonFilter, 'igual a')
        userEvent.clear(valueFilter)
        userEvent.type(valueFilter, '18')
        const buttonFilter3 = screen.getByTestId("button-filter")
        userEvent.click(buttonFilter)
        expect(screen.getByText('rotation_periodigual a18')).toBeInTheDocument()

        // testando funcao de remover 1
        const onlyRemoveBtn = screen.getByTestId("population")
        userEvent.click(onlyRemoveBtn)
        expect(onlyRemoveBtn).not.toBeInTheDocument()

        // testando botao que remove all
        const allRemoveBtn = screen.getByTestId("button-remove-filters")
        userEvent.click(allRemoveBtn)
        expect(allRemoveBtn).toBeInTheDocument()
})
});