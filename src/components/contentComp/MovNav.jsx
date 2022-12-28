import React from 'react'
import {Link} from 'react-router-dom'
import logoImg from '../../assets/images/netflixlogo.png'

export default function ContentMain() {
    return (
        <>
            <div className='navContainer p-0' style={{backgroundColor:'black',height:"60px"}}>
                <div >
                    <Link to={'/'}><img className='mx-5 p-0' style={{height:"75px"}} src={logoImg} alt="netflix logo" /></Link>
                </div>
                <div className='rightNav p-0' style={{width:"34%"}}>
                    <p style={{fontSize:"13px"}}>UNLIMITED TV SHOWS & MOVIES</p>
                    <div>
                        <Link to={'/login'}><button  className='navBtn px-4 py-2 me-2' style={{fontSize:"12px"}}>JOIN NOW</button></Link>
                    </div>
                    <div className='langSelectContainer px-2  py-1 me-5' style={{backgroundColor:"black"}}>
                        <p className='px-3  ' style={{fontSize:'13px'}}>Sign Out</p>
                    </div>

                </div>
            </div>
        </>
    )
}