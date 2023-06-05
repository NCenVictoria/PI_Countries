import React  from 'react'
import './Home.css'
import Cards from '../../components/cadsContainer/Cards'
import SearchBar from '../../components/search/SearchBar'
import Paginated from '../../components/paginated/Paginated'

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries , filter} from "../../redux/actions";
export default function Home() {
  
  
   const dispatch = useDispatch();
   
   useEffect(() => {
    // al montarse el componente home es cuando va imprimir la accion  
    return dispatch(getCountries());
    
  }, [dispatch]); 

 const filterHandler = (event) =>{
  event.preventDefault()
  dispatch(filter(event.target.value))
 
 }

 

  return (
    <div className='body'>SPA
    <div className='nav'><SearchBar/></div>
      
       <label htmlFor="">Filter by Continent:</label>
      <select  name="" id="" onChange={filterHandler}>
        <option value="">Select</option>
        <option value="asia">ASIA</option>
        <option value="america">AMERICAS</option>
        <option value="africa">AFRICA</option>
        <option value="antartica">ANTARTICA</option>
        <option value="europa">EUROPA</option>
<option value="oceania">OCEANIA</option>     
 </select>
 <Cards className='container'/>
 
 <Paginated></Paginated>
 
  </div>
  )
}
// ASIA.
// AMÉRICA.
// ÁFRICA.
// ANTÁRTIDA.
// EUROPA.
// OCEANÍA.
