import { MdLocalPhone } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { FaAward, FaLocationArrow } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { RiEmotionHappyFill } from "react-icons/ri";
import { GiClick } from "react-icons/gi";
const WhyChooseUs = () => {
    return (<>
        <section className=" space why-choose-block" >
            <div className="container  container-custom">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <h2>
                            Why Choose  Us?
                        </h2>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="why-choose_list why-choose_list-br">
                                    <i className="fas "><FaAward /></i>
                                    <div className="why-choose_list-content">
                                        <h5>Positive Reputation</h5>
                                        {/* <span>Lorem ipsum dolor sit</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="why-choose_list why-choose_list-br">
                                    <i className="fas "><FaUserDoctor /></i>
                                    <div className="why-choose_list-content">
                                        <h5>Expert Team</h5>
                                        {/* <span>Lorem ipsum dolor sit</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="why-choose_list why-choose_list-br">
                                    <i className="fas "><BiSupport /></i>
                                    <div className="why-choose_list-content">
                                        <h5>Follow-Up Care</h5>
                                        {/* <span>Lorem ipsum dolor sit</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="why-choose_list why-choose_list-br">
                                    <i className="fas "><RiEmotionHappyFill /></i>
                                    <div className="why-choose_list-content">
                                        <h5>Transparent Pricing</h5>
                                        {/* <span>Lorem ipsum dolor sit</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="why-choose_list why-choose_list-br">
                                    <i className="fas "><GiClick /></i>
                                    <div className="why-choose_list-content">
                                        <h6>Flexible Appointment</h6>
                                        {/* <span>Lorem ipsum dolor sit</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="why-choose_list why-choose_list-br">
                                    <i className="fas "><FaLocationArrow /></i>
                                    <div className="why-choose_list-content">
                                        <h5>Convenient Location</h5>
                                        {/* <span>Lorem ipsum dolor sit</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        < hr />
                        <div className="row">
                            <div className="col-md-12">
                                <a href="#" className="btn btn-dark" >MAKE APPOINTMENT</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 offset-lg-1">
                        <div className="why-choose_right">
                            <h2>
                                Emergency?<br /> Contact Us.
                            </h2>
                            <p>
                                We're here to help with any questions you may have. Feel free to reach out to us through the following channels:
                            </p>
                            <div className="why-choose_list">
                                <div className="choose-icon">
                                    <i className=""><MdLocalPhone /></i>
                                </div>

                                <div className="why-choose_list-content">
                                    <span>Call us now</span>
                                    <h3>+123 456 7890</h3>
                                </div>
                            </div>
                            <div className="why-choose_list">
                                <div className="choose-icon">
                                    <i className=""><IoMailOpen /></i>
                                </div>
                                <div className="why-choose_list-content">
                                    <span>Mail us</span>
                                    <h3>info@medenin.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default WhyChooseUs;