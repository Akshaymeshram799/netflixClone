import React from 'react'
import '../assets/styles/FirstCenterCont.css'
import { Link } from 'react-router-dom'

export default function FirstCenterCont() {
  return (
    <>  
      <div className='centerContentContainer'>
        <h3 className='welText mb-2'>Welcome back!</h3>
        <h2 className='sencondText'>Unlimited movies, TV <br /> shows and more.</h2>
        <h3 className='thirdText mb-3 mt-2'>Watch anywhere. Cancel anytime.</h3>
        <Link to={'/register'}><button className='centerBtn py-2 px-3 mt-4 rounded-2'>Finish Sign Up <span>&#10095;</span> </button></Link>
      </div>
    </>
  )
}
