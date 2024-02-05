import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFecth from './hooks/useFecth'
import CountruCard from './components/CountruCard'
import Pagination from './components/Pagination'

function App() {
  const[country,getCountry]=useFecth()
  const [pagination, setPagination] = useState(1)
  const [search, setSearch] = useState('spanish')
  useEffect(() => {
    const url=`https://restcountries.com/v3.1/lang/${search}`
   
   getCountry(url)
  }, [search])
  //funcionamiento del input y el bottom
  const textinput=useRef();
  const handleSubmit=event =>{
    event.preventDefault()
    setSearch(textinput.current.value.trim().toLowerCase())
  }
   //paginacion
  //se realiza un corto cicuito
  //esta primera variable esl la cantidad de elelmento por pagina
  const quantity=4;
  //este es la pagina en la que estoy por lo que hay
  const second=pagination*quantity;
  //este ultimo es elcontenido que se va a mostrar
  const first=second-quantity;
  ////se realiza un corto cicuito
  const countryPart=country && country.slice(first,second)
  //total de pagina y se realiza otro corto circuito
  const total= country && Math.floor(country.length/quantity);

  return (
    <>
      <div className='app'>
        <h1 >App Country for language</h1>
        <form onSubmit={handleSubmit}>
            <input ref={textinput} required  placeholder="Search"/>
            <button>Search</button>
        </form>
        
        <div className='container'>
        {
        countryPart?.map(country => (
          <CountruCard
          key={country.name.common}
          country={country}
          /> 

        ))
        }
      </div>
         <Pagination
         setPagination={setPagination}
         total={total}
         pagination={pagination}
           />
      </div>
    </>
  )
}

export default App
