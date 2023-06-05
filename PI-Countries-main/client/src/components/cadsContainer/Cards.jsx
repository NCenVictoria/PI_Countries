import React from 'react'
import Card from '../card/Card'
import {getActivities, order} from '../../redux/actions'
import { useSelector , useDispatch } from 'react-redux'
import './CardsContainer.css'



export default function Cards() {
  const filters = useSelector(state=>state.filters)
  const countriesFil = useSelector(state=>state.countriesFil)
  const countries = useSelector(state=>state.countries)
  
  const page = useSelector(state=>state.page)

  const countrisRender =filters?countriesFil:countries
  const from = (page-1)*10
  const to = page*10
  console.log(from,to)
  const viewCountries = countrisRender.slice(from ,to )   

  const dispatch= useDispatch()
    
  
    const orderHandler = (event) =>{
      
      if(event.target.value==='activities') return dispatch(getActivities())
      return dispatch(order(event.target.value))
    }
  
   
  return (
    <div>
      <label htmlFor="">Ordenar por:</label>
      {console.log(viewCountries)}
      <select onChange={orderHandler} name="" id="">
        <option  value="">Select</option>
        <option value="activities">activities</option>
        <option value="alph_asc">alph_asc</option>
        <option value="alph_dec">alph_dec</option>
        <option value="population_asc">population_asc</option>
        <option value="population_dec">population_dec</option>
      </select>
      <div className='cards_container' >
      {
        viewCountries.length && viewCountries.map(country=>{
            return (
              <div className='card' key={country.id}>
              
                  <Card
                      id={country.id}
                      name={country.name}
                      continent={country.continent}
                      image={country.image}
                  />
            
          </div>
          
              )
            })
            
            
        }
        </div>
        </div>
  )
}
