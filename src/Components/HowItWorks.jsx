import React from 'react'
import '../Css/HowItWorks.css'

const HowItWorks = () => {
    return (
        <>
            <div className='howItWork-container'>
                <h1>How It Works</h1>
                <p>We provide training in both online and offline modes</p>
                <div className='row'>
                    <div className='col'>
                        <img src="images/howitwork1.png" alt="HowWork" />
                        <h4>Online Training</h4>
                        <p>
                            Long-distance learning is possible with our online training method. It is just as effective as
                            conventional offline training but allows for more flexibility, easy access to resources, and
                            equal trainer support. It is possible to conduct the training using a low-speed internet
                            connection.
                        </p>
                    </div>
                    <div className='col'>
                        <img src="images/howitwork2.png" alt="HowWork" />
                        <h4>Offline Classroom Training</h4>
                        <p>
                            Our training takes place in batches at our Puducherry-based institute, and our phenomenal
                            training methods offer a solid foundation of programming edge. We provide an excellent
                            infrastructure for trainees, and our training methods provide a solid foundation of programming
                            expertise. For job seekers and professionals looking to enhance their skills, batches of flexible
                            training times are available.
                        </p>
                    </div>
                    <div className='col'>
                        <img src="images/howitwork3.png" alt="HowWork" />
                        <h4>Video Course</h4>
                        <p>Our online video courses give best leverage to flexible learning in their own learning phase.
                            Enrolled candidates can access the High quality pre-recorded courses from anywhere, anytime
                            with their flexible time and phase.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks