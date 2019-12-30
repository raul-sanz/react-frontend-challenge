import React from 'react'
import styled from 'styled-components'
/**Loading component */
const Modal = styled.div.attrs({
  className:'w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50'
})``

const Spinner = styled.span.attrs({
  className:'text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0'
})`
  top: 50%;
`

export default function Loading(){
  return(
    <Modal >
      <Spinner>
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </Spinner>
    </Modal>
  )
}