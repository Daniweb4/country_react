import React, { useState } from 'react'
import axios from 'axios'
const useFecth = () => {
    const [apiCountry, setapiCountry] = useState()

    const getApi=url=>{
        axios.get(url)
        .then(res =>setapiCountry(res.data))
        .catch(err=>console.log(err))

    }
    return [apiCountry,getApi]

  
}

export default useFecth