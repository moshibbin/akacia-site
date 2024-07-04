import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope, FaMap, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
const Sidebar = () => {
    return (<div className="col-md-12 col-lg-3 ">
        <div className="sidebar-category1">
            <div className="sidebar-category " style={{ backgroundColor: "transparent" }}>
                <img style={{ width: "20rem", height: "35rem", objectFit: "cover" }} src="/images/sidebar.png"></img>
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
                    <a target="_blank" href="https://drive.google.com/file/d/1h-8lnE22aLlzBGstnvKQqfy181g_up-G/view?usp=sharing">

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

    </div >);
}

export default Sidebar;