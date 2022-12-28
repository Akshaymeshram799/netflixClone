import React from 'react'
import Carousel from './Carousel'
import Carousel1 from './Carousel1'
import Carousel2 from './Carousel2'
import Carousel3 from './Carousel3'
import Carousel4 from './Carousel4'
import Carousel5 from './Carousel5'
import Carousel6 from './Carousel6'
import Carousel7 from './Carousel7'
import FirstHeading from './FirstHeading'
import MovNav from './MovNav'
import { useContext } from 'react'
import { AuthState } from '../../App'
import Carousel8 from './Carousel8'
import Carousel9 from './Carousel9'
import Footer from './Footer'
import { Link } from 'react-router-dom'


export default function ContentMain() {
  const Auth = useContext(AuthState)
 
  return (
    <>
      {
        Auth ?
          <div style={{ backgroundColor: '#181818' }}>
            <MovNav />
            <FirstHeading />
            <Carousel title={'Popular on Netflix'} />
            <Carousel1 title={'Get In On the Action'} />
            <Carousel2 />
            <Carousel3 />
            <Carousel4 />
            <Carousel5 />
            <Carousel6 />
            <Carousel7 />
            <Carousel8 />
            <Carousel9 />
            <Carousel title={'New Releases'} />
            <Carousel1 title={'Children & Family TV'} />
            <Footer />
          </div>
          :
          <div className='text-center'>
            <h1 className='text-center mt-5' style={{ color: "black" }}>Authenticate First</h1>
            <Link to={'/login'}><button className='mt-4 p-2 rounded-2' style={{ color: "black", textAlign: "center", backgroundColor: "red", border: "none" }}>Go to HomePage</button></Link>
          </div>

      }



    </>
  )
}
