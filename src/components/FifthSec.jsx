import React from 'react'
import childrenimg from '../assets/images/childrenimg.png'
import '../assets/styles/FifthSec.css'

export default function FifthSec() {
  return (
    <>
        <div className='fifthSecCon'>
            <div className='imgCont'>
                <img src={childrenimg} alt="tvimg" height={380} />
            </div>
            <div className='textCont'>
               <h2 className='headText'>Create profiles for <br /> children.</h2>
               <h3 className='secondText'>Send children on adventures with their <br /> favourite characters in a space made just for <br /> them—free with your membership.</h3>
            </div>
        </div>
    </>
  )
}
