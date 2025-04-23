import React from 'react'
import '../Css/Clients.css'

const Clients = () => {
  return (
    <>
      <div className='clients'>
        <h1>Our Clients</h1>
        <p>Various Educational Institutes and Universities prefer our pioneering training methods for their students.</p>
        <div className='row'>
          <img src="images/client1.png" alt="client" />
          <img src="images/client2.png" alt="client" />
          <img src="images/client3.png" alt="client" />
          <img src="images/client4.png" alt="client" />
          <img src="images/client5.png" alt="client" />
          <img src="images/client6.png" alt="client" />
        </div>
      </div>
    </>
  )
}

export default Clients