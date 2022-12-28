import React from 'react'
import FifthSec from './FifthSec';
import FirstSec from './FirstSec';
import Footer from './Footer';
import ForthSec from './ForthSec';
import QueSec from './QueSec';
import SecondSec from './SecondSec';
import ThirdSec from './ThirdSec';

export default function FrontPage() {
  return (
    <>
       <FirstSec/>
      <hr color='#222222' style={{height:"8px",border:"none",opacity:"1"}}/>
      <SecondSec/>
      <hr color='#222222' style={{height:"8px",border:"none",opacity:"1"}}/>
      <ThirdSec/>
      <hr color='#222222' style={{height:"8px",border:"none",opacity:"1"}}/>
      <ForthSec/>
      <hr color='#222222' style={{height:"8px",border:"none",opacity:"1"}}/>
      <FifthSec/>
      <hr color='#222222' style={{height:"8px",border:"none",opacity:"1"}}/>
      <QueSec/>
      <hr color='#222222' style={{height:"8px",border:"none",opacity:"1"}}/>
      <Footer/>
    </>
  )
}
