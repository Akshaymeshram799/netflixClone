import React, {useState } from 'react'
import logo from '../assets/images/netflixlogo.png'
import { Link,useNavigate} from 'react-router-dom'
import {Helmet} from 'react-helmet'



export default function RegisterPage() {
  
  const history = useNavigate()
  const [firstName, setFname] = useState(" ")
  const [lastName, setLname] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ") 
  const [errmsg,setErrmsg] = useState(" ")

  const submitForm = (e) => {
    e.preventDefault();
    let userInfo = {firstName,lastName,email,password}
    console.log(userInfo)
    let postData = async ()=>{
        try{           
            let data = await fetch('http://localhost/user/register',{
              method:"POST",
              headers:{
                'content-type':"application/json",
                'accept':"application/json",
                'Access-Control-Allow-Origin': '*'
              },
              body:JSON.stringify(userInfo)

            } );

            let resData = await data.json();

            if(resData.success){
              history('/login')
            }else{
              alert("Enter the right information")
            }

            console.log(resData);
            
            if(resData.code===400){
               setErrmsg(resData.message)
            }
            
          
            
           
        }catch(e){
          console.log(e);
        }
    }

    postData();
    
     
   
  }

  return (
    <>
      <Helmet>
        <title>Netflix user Registration</title>
      </Helmet>
      <div className='text-center'>
        <Link to={'/'}><img src={logo} alt="logo" height={200} /></Link>
      </div>
      <div>
        <h1 className='font-weight-bolder text-center' style={{ color: 'black', fontWeight: "bolder" }}>User Registration</h1>
        <div className='mx-auto container w-70 text-center mt-4'>
          <form onSubmit={submitForm}>
               
               <p style={{color:"red"}}>{errmsg}</p>
              <input style={{ color: 'black'}} className='p-2 mt-3 w-50'  onChange={(e)=>setFname(e.target.value)} type="text" placeholder='Enter your name' required/>
              <br />
              <input style={{ color: 'black'}} className='p-2 mt-3 w-50'  onChange={(e)=>setLname(e.target.value)} type="text" placeholder='Enter your last name' required/>
              <br />
              <input style={{ color: 'black'}} className='p-2 mt-3 w-50' onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='Enter your email' required/>
              <br />
              <input style={{ color: 'black'}} className='p-2 mt-3 w-50' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your password'  required/>
              <br />
              <button   className='mt-5 rounded-1 px-5 py-3' style={{backgroundColor:"#F40612" , border:'none'}}>Sign Up</button> 
          </form>
        </div>
      </div>
    </>
  )
}
