import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
/**
 * Table component for render data from api response
 */
const TableContainer = styled.div.attrs({
  className:'bg-white shadow-md rounded my-6'
})``

const Tables = styled.table.attrs({
  className: 'text-left w-full border-collapse'
})``

const Th = styled.th.attrs({
  className: 'py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light'
})``

export default function Table(props) {
  /** Define 'tr' node for rende item from props.eplorations */
  const trs = props.explorations.map((exp,i) =>
    <tr className="hover:bg-grey-lighter"  key={i}>
      <td className="py-4 px-6 border-b border-grey-light">{i}</td>
      <td className="py-4 px-6 border-b border-grey-light">{exp.bookingId}</td>
      <td className="py-4 px-6 border-b border-grey-light">{exp.name}</td>
      <td className="py-4 px-6 border-b border-grey-light">{exp.consumedMedications}</td>
    </tr>
  );

  return (
    /**Render table  */
    <div className="w-4/5 mx-auto">
      <TableContainer>

        <Tables > 
          <thead>
            <tr>

              <Th >Number</Th>
              <Th >Booking ID</Th>
              <Th >name</Th>
              <Th className =" ">Medications</Th>

            </tr>
          </thead>
          <tbody>

            {trs /**render const trs from line 20 in this file */ } 

          </tbody>
        </Tables>
        
      </TableContainer>

    </div>
  )
}

Table.propTypes = {
  explorations: PropTypes.array.isRequired
}