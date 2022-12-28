import React from 'react'
import tvMobImg from '../assets/images/tvwithmob.png'
import '../assets/styles/ForthSec.css'

export default function ForthSec() {
  return (
    <>
       <div className='forthSecCon'>
            <div className='textCont'>
               <h2 className='headText'>Watch everywhere.</h2>
               <h3 className='secondText'>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</h3>
            </div>
            <div className='imgCont'>
                <img src={tvMobImg} alt="tvimg" height={380} />
            </div>
        </div>
    </>
  )
}
