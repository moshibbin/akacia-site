import { AiFillTikTok } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { CgFacebook } from "react-icons/cg";
import { FaAngleDoubleRight, FaTwitter } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { servicesList } from "../data/services";
const Footer = () => {
    return (
        <footer>
            <div className="container container-custom">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="foot-contact-block">
                            <div className="footer-logo">
                                <img src="/images/logo2.png" className="img-fluid" alt="#" />
                            </div>
                            <p>
                                Discover a world of beauty and confidence with our premier cosmetology and hair clinic. Experience personalized care, expert services, and top-quality products tailored to meet your unique needs.
                            </p>
                            <Link style={{ textDecoration: "none" }} href="tel:31234567890">
                                <h4><i ><FaPhoneAlt /></i>+252636666782</h4>
                            </Link>
                            <Link style={{ textDecoration: "none" }} href="mailto:info@mededin.com">
                                <h4><i><IoMailUnread /></i>Info@akaciahrg.com
                                </h4>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 offset-lg-1">
                        <div className="foot-link-box">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="/about"><i ><FaAngleDoubleRight /></i>About Us</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="/about"><i ><FaAngleDoubleRight /></i>Our Mission</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="/services"><i ><FaAngleDoubleRight /></i>Our Services</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="/"><i ><FaAngleDoubleRight /></i>Blogs & News</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="/contact"><i ><FaAngleDoubleRight /></i>Contact Us</Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="/"><i ><FaAngleDoubleRight /></i>Faq</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <div className="foot-link-box">
                            <h4>Our Services</h4>
                            <ul>
                                {servicesList.slice(0, 5).map(serv => (
                                    <li key={serv.id}>
                                        <Link style={{ textDecoration: "none" }} href={`/services/${serv.id}`}><i ><FaAngleDoubleRight /></i>{serv.name}</Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 offset-lg-1">
                        <div className="foot-link-box footlink-box_btn">
                            <a href="#" className="btn btn-outline-success btn-pr">Find a Doctor</a>
                            <a href="#" className="btn btn-outline-success btn-pr">Career</a>
                            <a href="#" className="btn btn-outline-success btn-pr">Newsletter</a>
                            <ul className="footer-icons">
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="#"><i ><CgFacebook /></i></Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="#"><i ><FaTwitter /></i></Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="#"><i ><BiLogoInstagramAlt /></i></Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: "none" }} href="#"><i ><AiFillTikTok /></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright">
                            <p>© Medenin 2024 Allright Reserved.</p>
                            <a href="/" id="scroll"><i style={{ fontSize: "1rem" }}><MdKeyboardDoubleArrowUp /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;