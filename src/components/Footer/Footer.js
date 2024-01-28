import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-inner container ">
            <div className="footer-shape-1">
                <img src="/images/shape-21-01.png" width="160px" alt="" />
            </div>
            <div className="footer-shape-2">
                <img src="/images/shape-35.png" width="120px" alt="" />
            </div>
            <div className="row footer-grid">
                <div className=" footer-col col-lg-4 col-md-6 col-sm-12 col-12 pt-4">
                <h5 className="mb-4 fw-bold">Find Us</h5>
                <p className="my-4 text-white fw-semibold pe-5">
                Air Tech ' 24 is designed to be the largest Technical Olympiad of Pakistan. It will encourage the practical implementation of engineering and applied sciences through a range of technical events in the fields of mechatronics, mechanical, electrical, computer sciences & applied sciences.
                </p>
                <div className="footer-social-links d-flex align-items-center gap-3">
                    <a
                    href="https://www.linkedin.com/company/airtech2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src="/images/fb.png" width="23px" alt="facebook" />
                    </a>
                    <a
                    href="https://www.linkedin.com/company/airtech2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src="/images/linkedin.png" width="23px" alt="linkedin" />
                    </a>
                    <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src="/images/instagram.png" width="23px" alt="instagram" />
                    </a>
                </div>
                </div>
                <div className="footer-col col-lg-2 col-md-6 col-sm-12 col-12 pt-4">
                <h5 className="mb-4 fw-bold">Explore</h5>
                <ul className="pt-2">
                    <li className="mt-0">
                    <Link to="/about-us">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>About Us</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/instructors">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>Ambassadors</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/trainings">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>Events</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/contact-us">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>Contact Us</span>
                    </Link>
                    </li>
                    <li>
                    </li>
                </ul>
                </div>
                <div className="footer-col col-lg-3 col-md-6 col-sm-12 col-12 pt-4">
                <h5 className="mb-4 fw-bold">Top Events</h5>
                <ul className="pt-2">
                    <li className="mt-0">
                    <Link to="/events">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>Speed Programming</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/events">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>Game Jam</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/events">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>Hackathons</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/events">
                        <img
                        src="/images/double-arrow.png"
                        width="17px"
                        alt="->"
                        />
                        <span>Cyber Pro</span>
                    </Link>
                    </li>
                </ul>
                </div>
                <div className="footer-col col-lg-3 col-md-6 col-sm-12 col-12 pt-4">
                <h5 className="mb-4 fw-bold">Contact Info</h5>
                <ul className="pt-2">
                    <li className="mt-0">
                    <a href="https://www.facebook.com/transformatics.pk/">
                        <img src="/images/location.png" width="17px" alt="location pin" />
                        <span>Islamabad, Pakistan</span>
                    </a>
                    </li>
                    <li>
                    <a href="mailto:Info@transformatics.pk">
                        <img src="/images/email.png" width="17px" alt="email" />
                        <span>Info@airtech.pk</span>
                    </a>
                    </li>
                    <li>
                    <a href="tel:92 309 9077000">
                        <img
                        src="/images/phone-white.png"
                        width="17px"
                        alt="phone"
                        />
                        <span>+92 317 5777584</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </footer>

  )
}
