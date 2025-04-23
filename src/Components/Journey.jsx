import React from 'react'
import '../Css/Journey.css'

const Journey = () => {
    return (
        <>
            <div className='journey-container'>
                <div className='journey-top'>
                    <h1 className='journey-top-head'>Our Journey Through The Years</h1>
                    <p className='journey-top-content'>
                        Throughout the years since our inception, we have bestowed upon students with our wisdom and,
                        the help of our trainers, we have initiated and successfully run various programs to date.
                    </p>
                </div>

                <div className='journey-bottom'>
                    <div className='journey'>
                        <img src="images/journey1.png" alt="journey" />
                        <h5>75+ Free seminars</h5>
                        <p>Inspired by our way of teaching, many students from different states in India have attended our free workshops, which empowers us to advance our noble cause.</p>
                    </div>
                    <div className='journey2'>
                        <img src="images/journey2.png" alt="journey" />
                        <h5>10000+ Students trained</h5>
                        <p>As a prominent institute in Puducherry, we have successfully trained 5500+ students, inculcated our knowledge, and encouraged curiosity in them.</p>
                    </div>
                    <div className='journey3'>
                        <img src="images/journey3.png" alt="journey" />
                        <h5>6 International Workshop</h5>
                        <p>As the workshop conducted by Ocean Academy is in a class all by itself, we have completed 6 International workshops and provided hands-on training for students.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Journey