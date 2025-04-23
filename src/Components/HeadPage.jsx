import React from 'react'
import '../Css/HeadPage.css'

const HeadPage = () => {
  return (
    <>
      <div className='head-container'>
        <div className='head-left-content'>
          <h1>Instil the passion for coding in you through our state-of-the-art training</h1>
          <h6>
            Upskill yourself through practice-oriented training, learn in-demand skills,
            and expand your career opportunities.
          </h6>
          <div className='enrollNow'>
            Enroll Now
          </div>
        </div>
        <div className='head-right-content'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4jFn12roZtc?si=615M7nuFE2qFJ33N"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default HeadPage