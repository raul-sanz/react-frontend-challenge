import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import auth from '../utils/auth'


import Table from '../components/Table'
import Filter from "../components/Filter";
import Loading from '../components/Loading'
import {Alert} from '../components/Alert'
import {Button} from '../components/Button'

/**
 * Home pagem route is '/'
 */

 const LogoutBtn = styled(Button)`
 background-color:#FF5722;
 border-radius:25px;
 margin-left:10px;
 `


export default function Home(props) {

  const [data,setData] = useState([])
  const [load,setLoad] = useState(false)


/** Method for search data , show loading
 * Params (clinic,medicatiosn) from Filter component
 */

  const filter = async (clinic,medications)=>{
    setLoad(true)

    const token = window.localStorage.getItem('token')/**get token for authentication middleware */
    
    const resp = await axios.get(`http://127.0.0.1:3333/getExplorations?clinic=${clinic}&medications=${JSON.stringify(medications)}&page=1`,{headers: {Authorization: `Bearer ${token}`}})

    if(resp) setLoad(false)
    setData(resp.data)
  }
/** execute signout method from auth class utils/auth */
  const logout = ()=>{
    auth.signout(()=>{
      props.history.push('/login')
    })
  }

  return (
    <div>

      <Filter filter={filter}/>


      <div className="flex justify-end pt-3 pr-5">
        { data.length > 0 && <Alert type="success" title={data.length.toString()} message=" Explorations found"/> }
        <LogoutBtn onClick={logout}><i className="fas fa-sign-out-alt"></i> Sign Out</LogoutBtn>
      </div>

      <Table explorations={data}/>

      { load === true && <Loading/> }

    </div>
  )

}
