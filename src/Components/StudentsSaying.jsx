import React from 'react'
import '../Css/StudentsSaying.css'

export const StudentsSaying = () => {
    return (
        <>
            <div className='saying-container'>
                <div className='saying-top-content'>
                    <p><span>-</span> What our <span>-</span></p>
                    <h1>Students are Saying</h1>
                </div>
                <div className='review-all'>
                    <div className='saying-bottom-content'>
                        <div className='img'>
                            <img src="images/student5.png" alt="student" />
                        </div>
                        <div className='review-details'>
                            <div className='review-content'>
                                <p>
                                    Hi im Virginia Kamala, IIM (Indore) This is regarding the classes that I took up during
                                    my holidays here in puducherry. The feedback is extremely positive. One aspect that,
                                    I loved the most is the teacher herself, the dedication, the patience and the confidence
                                    with which she taught me and the consistent encouragement that she gave me everyday,
                                    helped me most to commit to my work with dedication. I will be ever grateful for the
                                    knowledge and the kindness showed.
                                </p>
                            </div>
                            <h4 className='name'>Virginia Miriam Kamala</h4>
                            <p>- C/C++/INDIAN INSTITUTE OF MANAGEMENT</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}