import React from 'react'
import '../assets/styles/Footer.css'

export default function Footer() {
  return (
    <>
      <div className='footerCon'>
        <div className='container mx-auto' style={{ backgroundColor: "black", width: "70%" }}>
          <div style={{ height: '20vh', display: "flex", justifyContent: "start", alignItems: "center", width: "40%" }}>
            <p>Questions? Call 000-800-919-1694</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <p className='m-3'>FAQ</p>
              <p className='m-3'>Investor Relations</p>
              <p className='m-3'>Privacy</p>
              <p className='m-3'>Speed Test</p>
            </div>
            <div>
              <p className='m-3'>Help Center</p>
              <p className='m-3'>Jobs</p>
              <p className='m-3'>Cookie Preferences</p>
              <p className='m-3'>Legal Notices</p>
            </div>
            <div>
              <p className='m-3'>Account</p>
              <p className='m-3'>Way to Watch</p>
              <p className='m-3'>Corporate Information</p>
              <p className='m-3'>Only on Netflix</p>
            </div>
            <div>
              <p className='m-3'>Media Center</p>
              <p className='m-3'>Terms of Use</p>
              <p className='m-3'>Contact Us</p>

            </div>
          </div>
          <div style={{ display: "flex", justifyContent: 'start' }}>
            <div style={{ width: "110px", textAlign: "center" }} className='langSelectContainer px-2 py-1 bg-dark mt-5'>
              <i className="fas fa-globe" style={{ color: "white" }}></i>
              <select name="English bg-dark" style={{ backgroundColor: "black",outline:"none" }} id="1" className='langSelectOpt'>
                <option id='1' value="English">English</option>
                <option id='2' value="Hindi">हिंदी</option>
              </select>
            </div>
          </div>
          <div>
            <p className='mt-5'>Netflix India</p>
          </div>
        </div>
      </div>
    </>
  )
}
