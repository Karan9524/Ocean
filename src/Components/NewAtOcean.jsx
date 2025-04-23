import React from 'react'
import '../Css/NewAtOcean.css'

const NewAtOcean = () => {
    return (
        <>
            <div className='whatsNewAtOcean'>
                <h1>What's New at Ocean Academy</h1>
                <p className='top'>
                    We are proud to release our most innovative learning platform to learn cutting-edge technologies.
                    Here's what's coming up next for Ocean Academy Live Members.
                </p>
                <div className='row'>
                    <div className='col'>
                        <h1>Ocean Academy Launches its own Job Portal for our OA-Students.</h1>
                        <p>
                            Welcome to the OA Job Portal by Ocean Academy, your pathway to success in the IT industry!
                            Our platform connects skilled IT professionals with leading tech companies, simplifying 
                            the job search and recruitment process.
                            <br />
                            <br />
                            <b>For candidates:</b> Explore exclusive job listings tailored to your skills and career
                            goals, whether you're an experienced professional or starting your journey.
                            <br />
                            <br />
                            <b>For recruiters:</b>  Access a diverse pool of talented candidates to find the perfect
                            fit for your team effortlessly.
                            <br />
                            Join the OA Job Portal today and connect with endless opportunities in tech
                            recruitment-your dream job or ideal candidate is just a click away!
                        </p>
                    </div>
                    <div className='col-one'>
                        <img src="images/newAtOcean.png" alt="newAtOcean" />
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col'>
                        <h1>Ocean Academy Launches its own LMS for our OA-Live Learners.</h1>
                        <p>
                            Ocean Academy Launches its own LMS for our OA-Live Learners. OA has launched its own CMS
                            for our learners to take the online class and enroll in the new online batch
                            effortlessly. This app will be more helpful for online learners to get the class
                            schedule details.
                        </p>
                    </div>
                    <div className='col-two'>
                        <img src="images/newAtOcean2.png" alt="newAtOcean" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewAtOcean