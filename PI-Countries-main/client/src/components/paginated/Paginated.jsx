import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { nextPage } from '../../redux/actions'

export default function Paginated() {
const dispatch = useDispatch()
const filters = useSelector(state=>state.filters)

const countriesFil = useSelector(state=>state.countriesFil)
const countries = useSelector(state=>state.countries)

const countrisPage =filters?countriesFil:countries


const pageNumbers =[]
    for (let i = 0; i <= Math.floor( countrisPage.length/ 10); i++) {
        pageNumbers.push(i + 1);
      }
      
      const next = (event)=>{
    
        event.preventDefault()
        
        return dispatch(nextPage(event.target.value))
    }

  

    
  return (
    <div>
        {pageNumbers?.map((num) => {
          
          
          return (
            <button
            class='button'
             
              key={num}
              onClick={next}
              value={num}
            >
              {num}
            </button>
          )
          
        })}
    </div>
  )
}
