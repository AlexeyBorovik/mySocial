import React from 'react'
import {create} from 'react-test-renderer'
import Paginator from './Paginator'

describe("Paginator component tests", () => {
    test("if pages count is more than 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let button = root.findAllByType('button')
        expect(button.length).toBe(1);
    })
})