import React from 'react'
import {NavLink } from "react-router-dom"
import './Card.css'

export default function Card(props) {
    console.log(props.name)
  return (
    <div className='container_card'>
      <div class='cont_img'>
      <NavLink to={`/detail/${props.id}`}>
      <img class='image'src={props.image} alt={props.name}/>
      </NavLink>

      </div>
      <div class='cont_text'>
      <div class='text'>
      <p>{props.name}</p>
      <p>Continent:{props.continent}</p>
      </div>
      </div>
    </div>
  )
}
