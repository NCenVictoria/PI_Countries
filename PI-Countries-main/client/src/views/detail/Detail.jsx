import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryById , clean} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("detalle de",id)
  useEffect(() => {
    // Se monta componente
  
    dispatch(getCountryById(id));
    return dispatch(clean());
    
  }, [dispatch,id]);
  const detail = useSelector(state => state.detail);
  console.log(detail)
  return ( 
            <div className='cont_detail'>
              
              {(detail)&&(
                <div className='cont_detail'>
                  <div class='img'>
                    <img src={detail.image} alt="img not found" />
                    </div>
                    <div class='cont_text'>
                    <div class='text'>
                    <p>name: {detail.name}</p>
                    <p>capital: {detail.capital}</p>
                    <p>code: {detail.id}</p>
                    <p>Continent: {detail.continent}</p>
                    <p>Subregión: {detail.subregion}</p>
                    <p>area: {detail.area} Km2</p>
                    <p>Population: {detail.population} people</p>
                    </div>
                    </div>
                    <div class='cont_text'>
                <h3 class='text'> - activities -</h3>
                {detail.Activities?.length ? detail.Activities.map((Activity) => (
                    <div class='text'>
                        <h4>
                            {" "}
                            {Activity.name}
                        </h4>
                        <p>Dificulty: {Activity.difficulty}</p>
                        <p>Duration: {Activity.duration} horas</p>
                        <p>season: {Activity.season}</p>
                    </div>
                )) : <p class='text'>This country has no assigned activities</p>}</div> 
                </div>
                )}
                </div>
    
         
            
  )
}



    


   
