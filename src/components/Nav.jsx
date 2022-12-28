import React,{useContext} from 'react'
import logoImg from '../assets/images/netflixlogo.png'
import '../assets/styles/Nav.css'
import { Link } from 'react-router-dom'
import {AuthState,setAuthState} from '../App'




export default function Nav() {
  const AuthenticationState = useContext(AuthState)
  const SetAuthState = useContext(setAuthState)
  console.log(AuthenticationState);
  return (
    <>
       <div className='navContainer'>
          <div >
               <Link to={'/'}><img className='logo mx-5 ' src={logoImg} alt="netflix logo" /></Link>
          </div>
          <div className='rightNav'>
            <div className='langSelectContainer px-2 py-1 bg-dark'>              
                <i className="fas fa-globe" style={{color:"white"}}></i>
                <select name="English bg-dark" style={{backgroundColor:"black"}} id="1" className='langSelectOpt'>
                    <option id='1' value="English">English</option>
                    <option id='2' value="Hindi">हिंदी</option>
                </select>
            </div>
            <div>
                <Link to={'/login'}><button onClick={()=>SetAuthState(false)} className='navBtn px-4 py-2'>{AuthenticationState?"Logout":"Log In"}</button></Link>
            </div>
            
          </div>
       </div>
    </>
  )
}
