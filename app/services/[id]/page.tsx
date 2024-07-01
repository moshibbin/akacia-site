'use client'
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaCheck, FaCheckDouble, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { servicesList } from "../../data/services";

const Page = () => {
    const params = useParams<{ id: string }>()

    const services = servicesList.filter(serv => serv.id === parseInt(params.id))
    console.log(services)
    return (<>
        <section className="light">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div className="sidebar-category">
                            <ul>
                                {servicesList.map(services => (
                                    <li key={services.id}>
                                        <Link href={`/services/${services.id}`} style={{ textDecoration: "none" }}>
                                            <img src={services.icon2} alt="#" />
                                            <span>{services.name}</span>
                                            <i className="fas fa-arrow-right"></i>
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
                                    <h6>+123 456 7890</h6>
                                </div>
                            </div>
                            <div className="contact-title">
                                <i className="fas "><FaEnvelope /></i>
                                <div className="contact-title_icon">
                                    <p>Email</p>
                                    <h6>info@exaple.com</h6>
                                </div>
                            </div>
                            <div className="contact-title">
                                <i className="fas "><FaLocationPin /></i>
                                <div className="contact-title_icon">
                                    <p>Location</p>
                                    <h6>2663 Lodgeville Road<br /> Minneapolis, Minnesota<br /> 55402, USA</h6>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box mb-4">
                            <h4>Downloads</h4>
                            <hr />
                            <div className="contact-title">
                                <div className="alert alert-success" role="alert">
                                    <img src="/images/002-pdf.svg" className="img-fluid" alt="#" />
                                    <p>Our Brouchure</p>
                                    <span>50kb</span>
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    <img src="/images/003-doc.svg" className="img-fluid" alt="#" />
                                    <p>Information Sheet</p>
                                    <span>120kb</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12 col-lg-8">
                        <div className="service-detail_wrap">
                            <div className="service-detail_img">
                                <img src={services[0].image} className="img-fluid" alt="#" />
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
                                {services[0].servicesInclude.map((serv, index) => (
                                    <div className="row">
                                        <div className="col-md-12" key={index}>
                                            <div className="whychoose-wrap p-0">
                                                <i className="fas " style={{ paddingRight: "10px" }}><FaCheckDouble /></i>
                                                <div className="whychoose-text_block">
                                                    <h4>{serv.name}</h4>

                                                    {/* <p>{serv.description}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}




                            </div>
                            <hr />
                            <div className="dental-features">
                                <h3>Medenin Dental Features</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="dental-features_list">
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Suspendisse facilisis sollicitudin sapien</h6>
                                            </li>
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Praesent metus risus, tristique at </h6>
                                            </li>
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Sed commodo placerat eros id luctus</h6>
                                            </li>
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Suspendisse eget tortor eget</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="dental-features_list">
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Nemo enim ipsam voluptatem voluptas.</h6>
                                            </li>
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Mauris bibendum felis id nisl facilisis</h6>
                                            </li>
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Donec condimentum rutrum auctor</h6>
                                            </li>
                                            <li>
                                                <i className="fas "><FaCheck /></i>
                                                <h6>Cras a justo et dolor luctus rhoncus eu</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <hr />
                                <h3>Our Dental Doctors</h3>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="doctors-box3 doctors-box3-service">
                                            <img src="/images/doctors-img1.jpg" className="img-fluid" alt="#" />
                                            <div className="doctors-plus-icon"><i className="fas fa-plus"></i></div>
                                            <h4>Dr. Mary Joe</h4>
                                            <p>SURGEON</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="doctors-box3 doctors-box3-service">
                                            <img src="/images/doctors-img2.jpg" className="img-fluid" alt="#" />
                                            <div className="doctors-plus-icon"><i className="fas fa-plus"></i></div>
                                            <h4>Dr. Mary Joe</h4>
                                            <p>SURGEON</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="doctors-box3 doctors-box3-service">
                                            <img src="/images/doctors-img3.jpg" className="img-fluid" alt="#" />
                                            <div className="doctors-plus-icon"><i className="fas fa-plus"></i></div>
                                            <h4>Dr. Mary Joe</h4>
                                            <p>SURGEON</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Page;