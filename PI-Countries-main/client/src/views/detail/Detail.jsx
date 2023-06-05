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
            <div className=''>
              <h3 class='text'>Country detail</h3>
              {(detail)&&(
                <div>
                    <img src={detail.image} alt="img no encontrada" />
                    <div class='text'>
                    <p>name: {detail.name}</p>
                    <p>capital: {detail.capital}</p>
                    <p>code: {detail.id}</p>
                    <p>Continent: {detail.continent}</p>
                    <p>Subregión: {detail.subregion}</p>
                    <p>area: {detail.area} Km2</p>
                    <p>Population: {detail.population} people</p>
                    </div>
                <h3>Actividades Turísticas</h3>
                {detail.Activities?.length ? detail.Activities.map((Activity) => (
                    <div>
                        <h4>
                            {" "}
                            {Activity.name.charAt(0).toUpperCase() +
                                Activity.name.slice(1).toLowerCase()}
                        </h4>
                        <p>Dificultad: {Activity.difficulty}</p>
                        <p>Duración: {Activity.duration} horas</p>
                        <p>Temporada: {Activity.season}</p>
                    </div>
                )) : <p>Este País aún no tiene actividades turísticas asignadas</p>}
                </div>
                )}
                </div>
    
         
            
  )
}



    


   
