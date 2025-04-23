import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='contact-address'>
          <div className='subscribe-page'>
            <h1>Ocean Academy</h1>
            <p>
              Ocean was founded on the principle of building and implementing great
              ideas that drive progress for the students and clients.
            </p>
            <div className='subscribe'>
              <input type="email" id='email' name='email' placeholder='Enter Your Email' title='Please fill out this field.' />
              <div className='sub'>Subscribe</div>
            </div>
          </div>
          <div className='contact-page'>
            <div className='contact'>
              <p><a href="#">0413-2240580</a></p>
              <p><a href="#">oceanacademy@gmail.com</a></p>
            </div>
            <div className='contact'>
              <p><a href="#">CONTACT US</a></p>
              <p><a href="#">SERVICES</a></p>
              <p><a href="#">ONLINE COURSES</a></p>
              <p><a href="#">OFFLINE COURSES</a></p>
            </div>
            <div className='contact'>
              <p><a href="#">TERMS AND CONDITIONS</a></p>
              <p><a href="#">PRIVACY POLICIES</a></p>
              <p><a href="#">ABOUT US</a></p>
            </div>
          </div>
        </div>

        <div className='icons'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </>
  )
}

export default Footer