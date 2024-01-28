import React from 'react'
import './Ambassadors.css'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import instructors from '../../variables/ambassadors'
import { Helmet } from 'react-helmet'


export default function Ambassadors() {
  return (
    <div className="site-wrapper">
      <Helmet>
        <title>Our Instructors || Transformatics</title>
        <meta
          name="description"
          content="Instructors for data analytics courses at Transformatics"
        />
      </Helmet>
      <section className="instructors-grid section-spacing">
        <div className="container">
          <div className="section-heading d-flex justify-content-between align-items-center">
            <div>
              <h6>Campus Connectors</h6>
              <h1>Ambassadors</h1>
            </div>
            <button className="generic-btn-1 p-2 px-3 ms-4">
              Register As Ambassador
            </button>
          </div>
          <div className="instructor-slide mt-5">
            {/* <Slider {...options}> */}
            {instructors.map(instructor => (
              <InstructorCard {...instructor} key={instructor.linkedin} />
            ))}
            {/* </Slider> */}
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  )
}

function InstructorCard({ name, linkedin, title, imgSrc, whatsapp }) {
  return (
    <div className="instructor-slide-item">
      <div className="instructor-slide-item-inner">
        <div className="instructor-img-wrapper">
          <img src={imgSrc} style={{ borderRadius: '50%' }} alt="" />
          <div className="instructor-img-overlay"></div>
          <a className="instructor-link" href={linkedin}>
            <img src="./images/linkedin-blue.png" width="20px" alt="" />
          </a>
        </div>
        <h4 className="text-center text-purple mt-4">
          {' '}
          <a href={linkedin} className="text-purple fw-bold">
            {name}
          </a>{' '}
        </h4>
        <h6 className="text-blue mt-2 text-center"> {title}</h6>
        {/* for whatsapp icon and yes it is junky code */}
        <div className="d-flex justify-content-center">
          <a href={whatsapp}>
            <img src="./images/whatsapp.png" width="60px" alt="whatsapp icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
