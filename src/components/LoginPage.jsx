import React, { useState } from 'react'
import logo from '../assets/images/netflixlogo.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import {useNavigate} from 'react-router-dom'


export default function LoginPage(props) {

  const history = useNavigate();
  // const [imageUrl,setImageUrl] = useState('http://localhost/user/users')
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emsg, setEmsg] = useState('')  

    

  const submitDetails = (e) => {
    e.preventDefault()
    let userInfo = { email, password }

    try {
      let loginWithDetails = async () => {
        let res = await fetch('http://localhost/user/login',
          {
            method: "POST",
            headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
          }

        )

        let data = await res.json();
        
        
        // console.log(data.getUser)
       
        // let imageUrl = ` http://localhost/user/users/${data.getUser.photo}`
        // console.log(imageUrl)

        if (data.code === 400) {
          setEmsg(data.message)
        }


        if(data.success){
            history('/movies')
            props.authenticateState(true)
        }else{
           alert('Enter valid email password');
        }

        console.log(props.authenticate);
              
       
      }

      loginWithDetails();
      

    } catch (e) {
      setEmsg(e.message)
    }

  }
  return (
    <>

      <Helmet>
        <title>Netflix user Login</title>
      </Helmet>
      <div className='text-center'>
        <Link to={'/'}><img src={logo} alt="logo" height={200} /></Link>
      </div>
      <div>
        <h1 className='font-weight-bolder text-center' style={{ color: 'black', fontWeight: "bolder" }}>User Login</h1>
        <div className='mx-auto container w-70 text-center mt-4'>
          <form onSubmit={submitDetails}>
            <p style={{ color: "red" }}>{emsg}</p>
            <input style={{ color: 'black' }} className='p-2 mt-3 w-50' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' required />
            <br />
            <input style={{ color: 'black' }} className='p-2 mt-3 w-50' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' required />
            <br />
            <button className='mt-5 rounded-1 px-5 py-3' style={{ backgroundColor: "#F40612", border: 'none' }}>Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}
