import React, { useState } from 'react'
import Table from '../components/Table'
import Filter from "../components/Filter";
import axios from 'axios'
import Loading from '../components/Loading'
import {Alert} from '../components/Alert'

/**
 * Home pagem route is '/'
 */

export default function Home() {

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

  return (
    <div>
      <Filter filter={filter}/>

      <div className="flex justify-center pt-3">
        { data.length > 0 && <Alert type="success" title={data.length.toString()} message=" Explorations found"/> }
      </div>

      <Table explorations={data}/>

      { load === true && <Loading/> }

    </div>
  )

}
