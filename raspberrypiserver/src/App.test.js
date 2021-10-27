import React from 'react'
import {shallow, mount, render} from 'enzyme';
import ListTask from './components/ListTask'

it('expect to render ListTask',()=>{
expect(shallow(<ListTask a={'a'}/>).length).toEqual(1)
})