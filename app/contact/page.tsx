import { FaEnvelope, FaPhone } from "react-icons/fa";
import SecondHero from "../components/seconderHero";
import { FaLocationPin } from "react-icons/fa6";

const page = () => {
    return (<>
        <SecondHero nextPage="Contact Us" description={"Reach out to us for any questions, to book an appointment, or to learn more about our services. We're here to help!"} />
        <section className="space">
            <div className="container container-custom">
                <div className=" row">
                    <div className="col-md-8">
                        <div className="map-img-wrap">
                            <img src="images/contact-map.png" className="img-fluid" alt="#" />
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i></li>
                                <li><i className="fas fa-map-marker-alt"></i></li>
                                <li><i className="fas fa-map-marker-alt"></i></li>
                                <li><i className="fas fa-map-marker-alt"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-box">
                            <p>Get in touch with us for any inquiries or to schedule your appointment. We're here to assist you and ensure your experience at our clinic is exceptional.</p>
                            <hr />
                            <div className="contact-title">
                                <h4>Contact Information</h4>
                                <i className="fas "><FaPhone /></i>
                                <div className="contact-title_icon">
                                    <p>Phone</p>
                                    <h6>+252636666782</h6>
                                </div>
                            </div>
                            <div className="contact-title">
                                <i className="fas"><FaEnvelope /></i>
                                <div className="contact-title_icon">
                                    <p>Email</p>
                                    <h6>Info@akaciahrg.com
                                    </h6>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="contact-box">
                            <div className="contact-title">
                                <h4>Head Office</h4>
                                <i className="fas "><FaLocationPin /></i>
                                <div className="contact-title_icon">
                                    <p>Location</p>
                                    <h6>Near DAHABSHIIL Gargaar branch, Hargeisa, Somaliland <br />
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4678.801059669632!2d44.02826798572338!3d9.561865417187033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bfe2b2d5f0a5%3A0xc1f4a0ddf8d12ee1!2sAKACIA%20HAIR%20CLINIC%20HARGEISA!5e0!3m2!1sen!2sso!4v1719814074184!5m2!1sen!2sso" width="100%" height="450" style={{ border: "0;" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6">
                        <div className="get-in-touch">
                            <img src="images/contact-form-bg.png" className="img-fluid get-in-bg" alt="#" />
                            <h3>Get in Touch with Us</h3>
                            <form action="https://api.web3forms.com/submit" method="POST" id="form">

                                <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="first name"
                                                placeholder="First Name" required />
                                            <i className="far fa-user"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="last name" placeholder="Last Name"
                                                required />
                                            <i className="far fa-user"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email address"
                                                placeholder="Your Email" required />
                                            <i className="far fa-envelope"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="number" className="form-control" name="phone number"
                                                placeholder="Your Phone Number" required />
                                            <i className="fas fa-phone"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group textarea-icon">
                                            <textarea className="form-control" name="message" required
                                                placeholder="Your Message" id="" ></textarea>

                                            <button type="submit" className="btn btn-dark">BOOK NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="result" className="text-white"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default page;