import React ,{useEffect}from 'react'
import './Home.css'
import Slider from "react-slick";
import chevronLeft from './../../images/chevron-left.png'
import chevronRight from './../../images/chevron-right.png'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import StatCards from '../../components/StatCards/StatCards' ;
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function Home() {


    let partnerShipSettings = {
        autoplay : true ,
        arrows : true ,
        responsive : true ,
        speed : 200 ,
        slidesToShow : 5 ,
        slidesToScroll : 2,
        swipeToSlide : true ,
        nextArrow : <button type="button" className="slick-next"><img src = {chevronRight} alt='next arrow' /></button> ,
        prevArrow : <button type="button" className="slick-prev"><img src = {chevronLeft} alt='prev arrow' /></button> ,
        responsive: [{
      
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
      
          }, {
      
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
      
          }, {
      
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
      
          }, {
      
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
      
        }]
    }

    useEffect( () => {
        AOS.init({ once : true });
    } , [] )

  return (
   
    <div className="site-wrapper home-page">

    <section className="banner-area py-0 mb-5"
        data-bs-touch="true"
        data-aos="fade-in"
    >
        <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
            <div className="carousel-item active " data-bs-interval={3000}>
            <div
                className="carousel-item-content "
                style={{ backgroundImage: "url(./images/temp1.jpg)" }}
            >
                <div className="carousel-item-content-inner">
                <div className="container">
                    <h1 className="text-white fw-bolder">
                    AirTech '24
                    </h1>
                    <h1 className="text-white f-light fw-bolder"> Pakistan's largest technical Olympiad</h1>
                    <p style={{maxWidth : '70ch'}} className='text-white my-5 d-none d-md-block'>
                        Air Tech ' 24 is designed to be the largest Technical Olympiad of Pakistan. It will encourage the practical implementation of engineering and applied sciences through a range of technical events in the fields of mechatronics, mechanical, electrical, computer sciences & applied sciences.
                    </p>
                    <div className="d-flex gap-4">
                        <button className="generic-btn-1 mt-4">View Events</button>
                        <button className="generic-btn-1 mt-4">Register Now</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselBanner"
            data-bs-slide="prev"
            >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselBanner"
            data-bs-slide="next"
            >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </section>

    <section className="services section-spacing pt-5">
        <div className=" services-inner container">
        <div className="section-heading text-center">
            <h6>Competitiion Categories</h6>
            <h1>Six Competition Categories</h1>
        </div>
        <div className="services-grid  mt-5">
            <div
            className="service-card "
            data-aos="fade-in"
            data-aos-duration={800}
            >
            <div className="service-card-inner">
                <img src="./images/robot-illustration.svg" width="150px" alt="training icon" />
                <h4 className="fw-bold mt-3 text-purple mt-4">Robotics</h4>
                <p>
                We offer best in class trainings both in Technical &amp; Non
                Technical Domains for individuals as well as corporates
                </p>
                <Link
                className="generic-btn-1 mt-4 mx-auto w-50"
                to="/events"
                >
                Explore
                </Link>
            </div>
            </div>
            <div
            className="service-card "
            data-aos="fade-in"
            data-aos-duration={800}
            >
            <div className="service-card-inner">
                <img src="./images/computer-illustration.svg" width="150px" alt="consultancy icon" />
                <h4 className="fw-bold mt-3 text-purple mt-4">Computer Science</h4>
                <p>
                We offer a range of career support from Interview Prep to resume
                building to support in finding the right job
                </p>
                <Link
                className="generic-btn-1 mt-4 mx-auto w-50"
                to="/events"
                >
                Explore
                </Link>
            </div>
            </div>
            <div
            className="service-card "
            data-aos="fade-in"
            data-aos-duration={800}
            >
            <div className="service-card-inner">
                <img src="./images/mechanical-illustration.svg" width="150px" alt="career icon" />
                <h4 className="fw-bold mt-3 text-purple mt-4">Mechanical</h4>
                <p>
                {" "}
                We offer services to help organizations leverage technology for
                efficiency, productivity, and profitability.
                </p>
                <Link
                className="generic-btn-1 mt-4 mx-auto w-50"
                to="/events"
                >
                Explore
                </Link>
            </div>
            </div>
            <div
            className="service-card "
            data-aos="fade-in"
            data-aos-duration={800}
            >
            <div className="service-card-inner">
                <img src="./images/pcb-illustration.svg" width="150px" alt="training icon" />
                <h4 className="fw-bold mt-3 text-purple mt-4">Electrical</h4>
                <p>
                We offer best in class trainings both in Technical &amp; Non
                Technical Domains for individuals as well as corporates
                </p>
                <Link
                className="generic-btn-1 mt-4 mx-auto w-50"
                to="/events"
                >
                Explore
                </Link>
            </div>
            </div>
            <div
            className="service-card "
            data-aos="fade-in"
            data-aos-duration={800}
            >
            <div className="service-card-inner">
                <img src="./images/solar.svg" width="150px" alt="consultancy icon" />
                <h4 className="fw-bold mt-3 text-purple mt-4">Physics</h4>
                <p>
                We offer a range of career support from Interview Prep to resume
                building to support in finding the right job
                </p>
                <Link
                className="generic-btn-1 mt-4 mx-auto w-50"
                to="/events"
                >
                Explore
                </Link>
            </div>
            </div>
            <div
            className="service-card "
            data-aos="fade-in"
            data-aos-duration={800}
            >
            <div className="service-card-inner">
                <img src="./images/math-illustration.svg" width="150px" alt="career icon" />
                <h4 className="fw-bold mt-3 text-purple mt-4">Mathematics</h4>
                <p>
                {" "}
                We offer services to help organizations leverage technology for
                efficiency, productivity, and profitability.
                </p>
                <Link
                className="generic-btn-1 mt-4 mx-auto w-50"
                to="/events"
                >
                Explore
                </Link>
            </div>
            </div>
        </div>
        </div>
    </section>


    <section className="choose-us section-spacing bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-heading ">
                            <h6>Why Attend AirTech</h6>
                            <h1>The Pakistan's largest technical Olympiad</h1>
                        </div>
                        <div className="choose-us-content">
                            <p className="mt-5 text-gray " style={{ textAlign: "justify" }}>

                            Air Tech will provide an opportunity to learn new concepts, improve problem-solving skills, and develop familiarity with industrial automation and multi-disciplinary events. It will improve the students' self-confidence, skill sets and their motivation towards technical development
                            <br /> <br />
                            Air Tech promises to be bigger and better than before. Apart from the usual technical events, organizing team is working towards some social events collections.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 ps-xl-5" data-aos="fade-in" data-aos-duration={1000}>
                        <div className="choose-us-highlights d-flex align-items-center gap-3 mt-xl-5">
                            <div className="choose-us-rounded-wrapper ">
                            <img src="./images/choose-1.png" width="38px" alt="" />
                            </div>
                            <h5 className="text-purple fw-bold">
                            Cutting-edge IT Training and Consultancy Services
                            </h5>
                        </div>
                        <div className="choose-us-highlights d-flex align-items-center gap-3 mt-4" data-aos="fade-in"
                        >
                            <div className="choose-us-rounded-wrapper ">
                            <img src="./images/choose-2.png" width="39px" alt="" />
                            </div>
                            <h5 className="text-purple fw-bold">
                            Elevate Your Team's Skills and Productivity
                            </h5>
                        </div>
                    <div className="choose-us-highlights d-flex align-items-center gap-3 mt-4" data-aos="fade-in">
                        <div className="choose-us-rounded-wrapper ">
                        <img src="./images/choose-3.png" width="39px" alt="" />
                        </div>
                        <h5 className="text-purple fw-bold">
                        Partnerships with major Corporations
                        </h5>
                    </div>
                    </div>
                </div>
                <StatCards/>
            </div>
    </section>


    <section className="partnership-showcase section-spacing "
        style={{ paddingBottom: 180 }}
    >
        <div className="partnership-showcase-inner container">
            <div className="section-heading " style={{ position: "relative" }}>
                <h6 className="text-white">Our Partnerships</h6>
                <h1 className="text-white">Corporate Partnerships</h1>
                <div className="partnership-showcase-shape-1">
                <img src="./images/shape-05-02.png" width="40px" alt="shape" />
                </div>
                <div className="partnership-showcase-shape-2">
                <img src="./images/shape-02-03.png" width="40px" alt="shape" />
                </div>
            </div>
            <div className="partner-showcase-content">
                <Slider {...partnerShipSettings}>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-1.png" width="220px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-10.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-2.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-9.png" width="150px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-8.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-7.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-6.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-5.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-4.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-3.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-11.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-12.png" width="200px" alt="partner" />
                    </div>
                    <div className="partner-showcase-item">
                    <img src="./images/partner-13.png" width="170px" alt="partner" />
                    </div>
                </Slider>
            </div>
        </div>
        <div className="partnership-showcase-shape-3">
            <img src="./images/shape-21.png" width="40px" alt="shape" />
        </div>
    </section>

    <ContactBanner/>

    </div>
  )
}
