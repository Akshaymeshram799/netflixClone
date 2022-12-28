import React from 'react'
import '../assets/styles/SecondSec.css'
import tvimg from '../assets/images/tv.png'

export default function SecondSec() {
  return (
     <>
        <div className='SecondSecCon'>
            <div className='textCont'>
               <h2 className='headText'>Enjoy on your TV.</h2>
               <h3 className='secondText'>Watch on smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players and <br /> more.</h3>
            </div>
            <div className='imgCont'>
                <img src={tvimg} alt="tvimg" height={380} />
            </div>
        </div>
     </>
  )
}
