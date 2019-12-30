import React,{useState} from 'react'
import styled from 'styled-components';
import {Button} from './Button'
import PropTypes from 'prop-types';

const SearchButton = styled(Button)`
  background-color:#73c6ec;
  border-radius:25px;
`
const Nav = styled.nav.attrs({
  className:'flex items-center justify-center flex-wrap p-6 w-full'
})`
  background-color:#2196F3;
`

const Input = styled.input.attrs({
  className:'bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none text-black'
})``

const Margin = styled.div.attrs({
  className:'mx-2'
})``

export default function Filter(props) {
  /**Define state for pass to filter function */
  const [clinic,setClinic] = useState('')
  const [medications,setMedications] = useState('')

  const handleFilter = ()=>{
    /** use filter function from 'Home' file in folder 'pages' */
    props.filter(clinic.toUpperCase(),medications.toUpperCase().split(","))
  }
  return (
    <div>
      <Nav>

        <Margin >
          <Input placeholder="Clinic Name" onChange={event => setClinic(event.target.value)}/>
        </Margin>

        <Margin >
          <Input placeholder="antibiotics,vitamins,etc" onChange={event => setMedications(event.target.value)}/>
        </Margin>

        <Margin>
          <div className="text-white font-bold">
            <input type="radio" id="huey" name="drone" value="strict"
                  />
            <label>Strict Mode</label>
          </div>

          <div className="text-white font-bold">
            <input type="radio" id="dewey" name="drone" value="lax"/>
            <label >Lax Mode</label>
          </div>
        </Margin>
        
 
        
        <Margin >
          <SearchButton onClick={handleFilter}><i className="fas fa-search"></i> Filter</SearchButton>
        </Margin>

      </Nav>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired
}