'use client'
import { FaCheck, FaUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { servicesList } from "../data/services";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from 'next/navigation'

type Inputs = {
    name: string,
    date: string,
    phone: string,
    city: string
    services: string
}
const Booking2 = () => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        date: "2",
        name: "2",
        phone: "2",
        city: "2",
        service: ""
    })
    const router = useRouter();

    const form = useForm<Inputs>()
    const { register, handleSubmit, formState: { errors } } = form;
    // const [service, setServices] = useState(false)

    const WHATSAPP_API_URL = 'https://api.whatsapp.com/send';
    const phoneNumber = '+252653140475'; // Replace with actual phone number
    const message = ` Client Name: ${data.name} Client Number: ${data.phone}  Client City: ${data.city} Appoitment Date: ${data.date} Select Services: ${data.service}`;
    const handleClose = () => {
        setShow(false);
        router.push(`${WHATSAPP_API_URL}?phone=${phoneNumber}&text=${message}`);
    };
    const handleShow = () => setShow(true);


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setData({
            date: data.date,
            name: data.name,
            phone: data.phone,
            city: data.city,
            service: data.services,
        })
        setShow(true)

    }
    return (<>
        <section className="about-section about-experience">
            <div className="container container-custom">
                <div className="row">

                    <div className="col-md-4">
                        <div className="service-thumbnail services-top-icon d-flex flex-fill">
                            <img src="images/icon5.png" className="img-fluid" alt="#" />
                            <div className="service-thumbnail_text">
                                <h4><span style={{ color: "#1382BB" }}>Experienced</span> Doctors</h4>
                                <p>Hair restoration, cosmetology</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service-thumbnail services-top-icon d-flex flex-fill">
                            <img src="images/icon-6.png" className="img-fluid" alt="#" />
                            <div className="service-thumbnail_text align-items-center">
                                <h4><span style={{ color: "#1382BB" }}>Painless</span> Treatments</h4>
                                <p>Hair restoration, cosmetology</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service-thumbnail services-top-icon d-flex flex-fill">
                            <img src="images/icon7.png" className="img-fluid" alt="#" />
                            <div className="service-thumbnail_text">
                                <h4><span style={{ color: "#1382BB" }}>Top</span> Clinic Equipment</h4>
                                <p>Hair restoration, cosmetology</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="about-title-block">
                            <h3>A <span>totally fresh</span> take on visiting a cosmetology and hair clinic</h3>
                            <p>Experience a revolutionary approach to beauty at our cosmetology and hair clinic. Discover personalized treatments in a relaxing and modern environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="space about-form">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-7 col-lg-8">
                        <div className="heading-style1 mb-0">
                            <span>Book Your Appointment Today</span>
                            <h2>Effortless Booking for a Transformative Experience</h2>
                            <p>Discover the ease of scheduling your visit to our cosmetology and hair clinic. Simply choose your desired treatment, select a convenient time, and let our expert team take care of the rest. Your journey to enhanced beauty and confidence begins with just a few clicks.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="dental-features_list">
                                    <li>
                                        <i ><FaCheck /></i>
                                        <h6>Personalized Treatments</h6>
                                    </li>
                                    <li>
                                        <i ><FaCheck /></i>
                                        <h6>Expert Team</h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="dental-features_list">
                                    <li>
                                        <i ><FaCheck /></i>
                                        <h6>Convenient Scheduling</h6>
                                    </li>
                                    <li>
                                        <i ><FaCheck /></i>
                                        <h6>Comprehensive Services</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <a href="#" className="btn btn-primary mt-4">READMORE</a> */}
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="booking-form-style2" style={{ padding: "3rem 1rem" }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3>Book Online</h3>
                                <div className="form-group form-group-cutom">
                                    <input type="date"  {...register("date", { required: true })} className="form-control form-custom" placeholder="Date and time" />

                                    {errors.date && <span style={{ color: "red" }}>Please choose the Date</span>}
                                </div>
                                <div className="form-group form-group-cutom">
                                    <input type="text" {...register("name", { required: true })} className="form-control form-custom" placeholder="Enter Your Name" />
                                    <i className=""><FaUser /></i>
                                    {errors.name && <span style={{ color: "red" }}>Please Enter Your Name</span>}
                                </div>
                                <div className="form-group form-group-cutom">
                                    <input type="number" {...register("phone", { required: true })} className="form-control form-custom" placeholder="Enter Your Phone number" />
                                    <i ><BsFillTelephoneFill /></i>
                                    {errors.phone && <span style={{ color: "red" }}>Please Enter Your Phone</span>}
                                </div>
                                <div className="form-group form-group-cutom">
                                    <input type="text" {...register("city", { required: true })} className="form-control form-custom" placeholder="Enter Your City" />
                                    <i className=""><IoLocationSharp /></i>
                                    {errors.city && <span style={{ color: "red" }}>Please Enter Your City</span>}
                                </div>

                                <div className="form-group form-group-cutom">
                                    <select {...register("services")} className="custom-select" id="inputGroupSelect02">

                                        {servicesList.map(services => (
                                            <>

                                                <optgroup label={services.name} key={services.id}>
                                                    {services.servicesInclude.map((subServices, index) => (

                                                        <option key={index} value={subServices.name}>{subServices.name}</option>
                                                    ))}

                                                </optgroup>
                                                {/* <hr /> */}
                                            </>
                                        ))}
                                        {/* <option value="2">Two</option>
                                        <option value="3">Three</option> */}
                                    </select>
                                    {errors.services && <span style={{ color: "red" }}>Please Choose The Services</span>}
                                </div>
                                <button type="submit" className="btn btn-dark w-100" >BOOK NOW</button>
                            </form>
                            <div className="booking-bg">
                                <img src="images/form-bg.png" className="img-fluid" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Confirmation & Next Steps</Modal.Title>
                </Modal.Header>
                <Modal.Body>Dear Client,
                    Thank you for your booking! Your details have been successfully recorded and sent to your WhatsApp. Please review the information and click the "Send" button to submit your appointment request through WhatsApp</Modal.Body>
                <Modal.Footer>

                    <Button variant="success" onClick={handleClose}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    </>);
}

export default Booking2;