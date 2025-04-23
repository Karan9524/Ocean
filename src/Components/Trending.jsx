import React from 'react'
import '../Css/Trending.css'
// import TrendingApi from '../Api/TrendingApi';

function TrendingCourse() {
    return (
        <div className='trending-container'>
            <div className='trending-top'>
                <h1>Trending Courses</h1>
                <p>
                    Ocean academy is here to offer you a wonderful fresher technical course package containing the
                    relevant courses in all areas of interview procedure which would help the students to shine
                    and succeed.
                </p>
            </div>
            <div className='trending-bottom'>

                {/* <div className='trending-course'>
                    <img src={props.image} alt="course" />
                    <h3>{props.course}</h3>
                    <p>{props.detail}</p>
                    <a href="#">{props.link}</a>
                </div> */}

                <div className='trending-course'>
                    <img src="images/course1.png" alt="course" />
                    <h3>MERNSTACK</h3>
                    <p>The MERN stack is a popular technology stack used for building web</p>
                    <div className='more'>
                        <a href="#">Get More Details</a>
                    </div>
                </div>

                <div className='trending-course'>
                    <img src="images/course2.png" alt="course" />
                    <h3>MERNSTACK</h3>
                    <p>The MEAN stack is a collection of JavaScript-based technologies used</p>
                    <div className='more'>
                        <a href="#">Get More Details</a>
                    </div>
                </div>

                <div className='trending-course'>
                    <img src="images/course3.png" alt="course" />
                    <h3>Python Fullstack</h3>
                    <p>This course is designed to teach web application development with python</p>
                    <div className='more'>
                        <a href="#">Get More Details</a>
                    </div>
                </div>

                <div className='trending-course'>
                    <img src="images/course4.png" alt="course" />
                    <h3>Java Fullstack</h3>
                    <p>The full stack developer definition is someone who can work on both the</p>
                    <div className='more'>
                        <a href="#">Get More Details</a>
                    </div>
                </div>

                <div className='trending-course'>
                    <img src="images/course5.png" alt="course" />
                    <h3>UI-UX</h3>
                    <p>Gathering and evaluating user requirements in collaboration with</p>
                    <div className='more'>
                        <a href="#">Get More Details</a>
                    </div>
                </div>

                <div className='trending-course'>
                    <img src="images/course6.png" alt="course" />
                    <h3>Data Analytics</h3>
                    <p>Data analytics involves the systematic analysis of data to uncover insights,</p>
                    <div className='more'>
                        <a href="#">Get More Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Trending = () => {
    return (
        <>
            <TrendingCourse />
        </>
    )
}






// export const Trending = () => {
//     return (
//         <>
//             {TrendingApi.map((trend, index) => (
//                 <TrendingCourse
//                     key={index}
//                     image={trend.images}
//                     course={trend.courseName}
//                     detail={trend.courseDetail}
//                     link={trend.link}
//                 />
//             ))}
//         </>
//     )
// }
