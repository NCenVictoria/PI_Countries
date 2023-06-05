import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav className='container'>
      <div className='cont_btn'>
        <img className='logo' src='https://blog.logomyway.com/wp-content/uploads/2011/09/country-flags.jpg'alt='logo'></img>
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
