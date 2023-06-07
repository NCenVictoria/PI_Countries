import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav className='container'>
      <div className='cont_btn'>
        
         <Link to={'/home'}>
        <button className='button'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              H O M E
            </button>
        </Link>
        <Link to={'/create'}>
        <button className='button'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              CREATE ACTIVITY
            </button></Link>
        </div>
        
        
    </nav>
  )
}
