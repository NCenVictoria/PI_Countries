import React from 'react'
import Card from '../card/Card'

import { useSelector} from 'react-redux'
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
  console.log (viewCountries)

  
    
  

  
   
  return (
    <div>
      
      <div className='cards_container' >
      {
        viewCountries.length && viewCountries?.map(country=>{
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
