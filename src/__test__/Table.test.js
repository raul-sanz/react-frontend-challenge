import React from 'react';
import Table from '../components/Table';
import { shallow, mount, render } from 'enzyme';
let data = [
  {name:'raul',bookingId:1,consumedMedications:'["Antibiotics"]'}
]

describe('Test data in table',()=>{
  const table = shallow(<Table explorations={data}/>)
  it('length tr render from data', () => {
    
    expect(table.find('tr')).toHaveLength(2);

  });

  it('length render td from items in data',()=>{
    expect(table.find('tr').find('td')).toHaveLength(4);
  })
})