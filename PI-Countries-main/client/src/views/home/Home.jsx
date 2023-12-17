import React from 'react'
import './Home.css'
import Cards from '../../components/cadsContainer/Cards'
import SearchBar from '../../components/search/SearchBar'
import Paginated from '../../components/paginated/Paginated'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries , filter, getActivities,order,getCountryByActivity} from "../../redux/actions";
export default function Home() {
  
  
   const dispatch = useDispatch();
   const allActivities = useSelector(state=>state.activity)
   const page=useSelector(state=>state.page)
   useEffect(() => {
    // al montarse el componente home es cuando va ejecutar la accion para cargar los estados
    dispatch(getCountries());
    dispatch(getActivities());
    
    // disparch get activities
  }, [dispatch]); 
  const activitiHandler=(event)=>{
    event.preventDefault()
   dispatch(getCountryByActivity(event.target.value))
   
    
  }
  const orderHandler = (event) =>{
    event.preventDefault()
    return dispatch(order(event.target.value))
  }

 const filterHandler = (event) =>{
  event.preventDefault()
  dispatch(filter(event.target.value))
 
 }

 

  return (
    <div className='body'>
    <div className='searchbar'><SearchBar/></div>
    <div className='menu'>
   
      
      <select className='button'onChange={orderHandler} name="" id="">
        <option  value=""selected='selected'>ORDER BY:</option>
        <option value="alph_asc">alph_asc</option>
        <option value="alph_dec">alph_dec</option>
        <option value="population_asc">population_asc</option>
        <option value="population_dec">population_dec</option>
      </select>
      
      <select className='button'name="" id="" onChange={activitiHandler} >
      <option  value="">Filter by Activity:</option>
      
      {
      // (allActivities.length>1) && allActivities?.map(activity => 
      //                               <option  key={activity.id} value={activity.name}>
      //                                   {activity.name}
      //                               </option>
      //                           )
                              }
                              
      </select>
      
      <select className='button' name="" id="" onChange={filterHandler}>
        <option value="">Filter by Continent:</option>
        <option value="asia">ASIA</option>
        <option value="america">AMERICAS</option>
        <option value="africa">AFRICA</option>
        <option value="antartica">ANTARTICA</option>
        <option value="europa">EUROPA</option>
        <option value="oceania">OCEANIA</option>     
 </select>
 </div>
 <Cards />
 <h4 className='page'>Page {page}</h4>
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
