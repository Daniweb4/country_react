import React from 'react'

const CountruCard = ({country}) => {
    console.log(country)
  return (
    <div className='container2'>
        <h1 className='country_name'>{country?.name.common}</h1>
        <img  src={country?.flags.svg}/>
        <ul class="country_ul">
          <li className='country_item'><h4>Capital:  {country?.capital}</h4></li>
          <li className='country_item'><h4>Población:  {country?.population}</h4></li>
          <li className='country_item'><h4>Continente:  {country?.continents}</h4></li>
          <li className='country_item'><h4>Superficie:  {country?.area}</h4></li>
      </ul>
    </div>
  )
}

export default CountruCard