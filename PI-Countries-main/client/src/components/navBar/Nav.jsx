import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default function Nav() {
//   const dispatch=useDispatch();
//   function back(event){
//     event.preventDefault();
//     dispatch(filtersFalse())
// }
  return (
    <nav className='container'>
      <div className='cont_btn'>
        
         <Link to={'/home'}>
        <button className='button'>
              
              H O M E
            </button>
        </Link>
        <Link to={'/create'}>
        <button  className='button'>
              
              CREATE ACTIVITY
            </button></Link>
        {/* <button onClick={back}>back</button> */}
  
        </div>
        
        
    </nav>
  )
}
