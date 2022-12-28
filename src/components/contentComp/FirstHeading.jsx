import React from 'react'

export default function FirstHeading() {
  return (
    <>
       <div className=' mx-auto' style={{height:"33vh",width:"93%",display:"flex",alignItems:'start',flexDirection:'column',justifyContent:'center'}}>
          <h1  style={{fontWeight:'900',fontSize:"3rem"}}>Netflix Originals</h1>
          <p className='mt-3' style={{fontSize:'1.2rem',lineHeight:'1.5rem'}}>Netflix is the home of amazing original programming that you can’t <br /> find anywhere else. Movies, TV shows, specials and more, it’s all <br /> tailored specifically to you.</p>
       </div>
    </>
  )
}
