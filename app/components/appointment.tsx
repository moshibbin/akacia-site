'use client'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight, FaCheck, FaCheckDouble, FaClipboardCheck, FaEnvelope, FaEye, FaMap, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";
import { servicesList } from "../data/services2";
import Link from "next/link";
import services from "./services2";
import { useState } from "react";
import { Collapse } from 'react-bootstrap';
import Pagination from "./pagination";
import { LiaGetPocket } from "react-icons/lia";
const Appointment = () => {


    const [open, setOpen] = useState(servicesList[0].id);

    const services = servicesList.filter(serv => serv.id === open);

    const itemsPerPage = 6;
    const items = services[0].servicesInclude;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Calculate the start and end indices for the current page items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);


    return (
        <>



            <section className="light">
                <div className="container container-custom">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="sidebar-category">
                                <ul>
                                    {servicesList.map(services => (
                                        <li key={services.id}>
                                            <Link href={`#`} onClick={() => setOpen(services.id)} style={services.id === open ? { textDecoration: "none", background: "#1382BB", } : { textDecoration: "none" }}>
                                                {/* <img src={services.icon2} alt="#" /> */}

                                                <span style={services.id === open ? { color: "white" } : {}}>{services.name}</span>
                                                <i className="fas ">{services.id == open ? <IoIosArrowDown /> : <IoIosArrowForward />}</i>
                                            </Link>

                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="contact-box mb-4">
                                <h4>Contact Us</h4>
                                <hr />
                                <div className="contact-title">
                                    <i className="fas "><FaPhoneAlt /></i>
                                    <div className="contact-title_icon">
                                        <p>Phone</p>
                                        <h6>+252636666782</h6>
                                    </div>
                                </div>
                                <div className="contact-title">
                                    <i className="fas "><FaEnvelope /></i>
                                    <div className="contact-title_icon">
                                        <p>Email</p>
                                        <h6>Info@akaciahrg.com
                                        </h6>
                                    </div>
                                </div>
                                <div className="contact-title">
                                    <i className="fas "><FaLocationPin /></i>
                                    <div className="contact-title_icon">
                                        <p>Location</p>
                                        <h6> Near  <br />DAHABSHIIL  Gargaar branch,<br /> Hargeisa, Somaliland</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-box mb-4">
                                <h4>Downloads</h4>
                                <hr />
                                <div className="contact-title">
                                    <a target="_blank" href="https://drive.google.com/file/d/15AEJUuS534OVBucPH0tHsGAGGBKy9ZYR/view?usp=sharing">

                                        <div className="alert alert-success" role="alert">
                                            <img src="/images/002-pdf.svg" className="img-fluid" alt="#" />
                                            <p>Our Brouchure</p>
                                            <span>50kb</span>
                                        </div>
                                    </a>
                                    {/* <div className="alert alert-warning" role="alert">
                                    <img src="/images/003-doc.svg" className="img-fluid" alt="#" />
                                    <p>Information Sheet</p>
                                    <span>120kb</span>
                                </div> */}
                                </div>

                            </div>

                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="service-detail_wrap">
                                <div className="service-detail_img">

                                    <h2>{services[0].name}</h2>
                                    <p>{services[0].description}</p>

                                    <hr />
                                </div>
                                <div className="our-dental-service">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className="mb-4">Our {services[0].name} Services Included</h3>
                                        </div>
                                    </div>

                                    <div className="Booking-serv">
                                        {currentItems.map((serv, index) => (
                                            <div className="bok-ser" key={index}>
                                                <div className="bok-header">
                                                    <div className="bok-icon"><LiaGetPocket /></div>
                                                    <div className="status">
                                                        <p style={{ fontWeight: "bold" }}>Status</p>
                                                        <p className="stas">Available</p>
                                                    </div>
                                                </div>
                                                <div className="title">

                                                    <h6>{serv.name}</h6>
                                                </div>
                                                <div className="cetg">
                                                    <p style={{ fontWeight: "meduim" }}>Cetegory:</p>
                                                    <p className="cet">{services[0].name}</p>
                                                </div>
                                                <button className="btn serv-btn">Make Appointment</button>
                                            </div>


                                        ))}
                                    </div>

                                    <div className="pagination">
                                        <div></div>
                                        <Pagination
                                            currentPage={currentPage}
                                            totalPages={totalPages}
                                            onPageChange={handlePageChange}
                                        />
                                    </div>





                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Appointment;
