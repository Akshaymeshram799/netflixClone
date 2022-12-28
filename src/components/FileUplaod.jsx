import React, { useState } from 'react'

export default function Fileuplaod() {
    const [file,setFile] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
      
    }
    
  return (
    <>
       <div className='text-center mt-5 text-dark'>
        <form onSubmit={handleSubmit}>
            <label style={{color:"black"}} className='mx-3'>upload a file</label>
          
            <input className='text-dark' type="file"  onChange={(e)=>setFile(e.target.files[0])} />
            <br />
            <button className='mt-5' style={{color:"black"}}>upload</button>
        </form>
       </div>
    </>
  )
}
