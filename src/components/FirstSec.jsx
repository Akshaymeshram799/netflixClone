import React from 'react'
import '../assets/styles/FirstSec.css';
import FirstCenterCont from './FirstCenterCont';
import Nav from './Nav';


export default function FirstSec() {
  return (
    <> 
      <div style={{backgroundColor:"black"}}>
        <div className='bgImage'>
            <Nav/>
            <FirstCenterCont/>
        </div>
      </div>
    </>
  )
}
