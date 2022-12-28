import React from 'react'
import '../assets/styles/ThirdSec.css'
import mblImg from '../assets/images/mobileimg.jpg'


export default function ThirdSec() {
  return (
     <>
        <div className='thirdSecCon'>
            <div className='imgCont'>
                <img src={mblImg} alt="tvimg" height={380} />
            </div>
            <div className='textCont'>
               <h2 className='headText'>Download your shows <br /> to watch offline.</h2>
               <h3 className='secondText'>Save your favourites easily and always have <br /> something to watch.</h3>
            </div>
        </div>
     </>
  )
}
