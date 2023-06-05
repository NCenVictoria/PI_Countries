import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className='body'>
      <div className='blur'>
        <div className='container'>
        <div className='title'>
        </div>
        <div className='container_btn'>
          <Link to="/home">
            <button className='button'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>E N T E R  TO C O U N T R I E S 
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
};