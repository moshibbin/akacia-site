import { FaFacebook, FaInstagram, FaSearch, FaTiktok, FaTwitter, FaUser } from "react-icons/fa";
import SecondHero from "../components/seconderHero";

const Page = () => {
    return (<>
        <SecondHero nextPage="Blogs" description={"Stay updated with the latest beauty trends, tips, and insights from our experts."} />
        <section className="space">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-8">
                        <form action="#">
                            <div className="blog-list">
                                <img src="images/blog-img.jpg" className="img-fluid" alt="#" />
                                <div className="blog-date">
                                    <h3>05</h3>
                                    <span>JUN</span>
                                </div>
                                <div className="blog-text-wrap">
                                    <div className="blog-comment-top">
                                        <p><i className="far"><FaUser /></i>Jhone Doe  </p>
                                        <label>Health Tips</label>
                                    </div>
                                    <h3>Things you may not know about medicaid den..</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt. </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                            <div className="blog-list">
                                <img src="images/blog-img-full1.jpg" className="img-fluid" alt="#" />
                                <div className="blog-date">
                                    <h3>05</h3>
                                    <span>JUN</span>
                                </div>
                                <div className="blog-text-wrap">
                                    <div className="blog-comment-top">
                                        <p><i className="far"><FaUser /></i>Jhone Doe  </p>
                                        <label>Health Tips</label>
                                    </div>
                                    <h3>Things you may not know about medicaid den..</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt. </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                            <div className="blog-list">
                                <img src="images/blog-img-full2.jpg" className="img-fluid" alt="#" />
                                <div className="blog-date">
                                    <h3>05</h3>
                                    <span>JUN</span>
                                </div>
                                <div className="blog-text-wrap">
                                    <div className="blog-comment-top">
                                        <p><i className="far"><FaUser /></i>Jhone Doe  </p>
                                        <label>Health Tips</label>
                                    </div>
                                    <h3>Things you may not know about medicaid den..</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt. </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-sidebar">
                            <div className="blog-sidebar_heading">
                                <h4>Search</h4>
                            </div>
                            <div className="blog-sidebar_wrap">
                                <div className="blog-sidebar_content blog-sidebar_search">
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search here" id="exampleFormControlInput1" />
                                            <i className="fas "><FaSearch /></i>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="blog-sidebar">
                            <div className="blog-sidebar_heading">
                                <h4>Popular Posts</h4>
                            </div>
                            <div className="blog-sidebar_wrap">
                                <div className="blog-sidebar_content">
                                    <a href="#" className="thumbnail-wrap">
                                        <img src="images/thambnail-1.jpg" alt="#" />
                                        <div className="thumbnail-hover">
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                    </a>
                                    <div className="thumbnail-text_wrap">
                                        <p>Lorem ipsum dolor sit amet,<br /> consectetur..
                                        </p>
                                        <span>June 25, 2019</span>
                                    </div>
                                </div>
                                <div className="blog-sidebar_content">
                                    <a href="#" className="thumbnail-wrap">
                                        <img src="images/thambnail-2.jpg" alt="#" />
                                        <div className="thumbnail-hover">
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                    </a>
                                    <div className="thumbnail-text_wrap">
                                        <p>Lorem ipsum dolor sit amet,<br /> consectetur..
                                        </p>
                                        <span>June 25, 2019</span>
                                    </div>
                                </div>
                                <div className="blog-sidebar_content">
                                    <a href="#" className="thumbnail-wrap">
                                        <img src="images/thambnail-3.jpg" alt="#" />
                                        <div className="thumbnail-hover">
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                    </a>
                                    <div className="thumbnail-text_wrap">
                                        <p>Lorem ipsum dolor sit amet,<br /> consectetur..
                                        </p>
                                        <span>June 25, 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-sidebar">
                            <div className="blog-sidebar_heading">
                                <h4>Categories</h4>
                            </div>
                            <div className="blog-sidebar_wrap">
                                <ul className="blog-sidebar_category">
                                    <li><a href="#">Dental Care</a> <span>15</span></li>
                                    <li><a href="#">Eye Care</a> <span>11</span></li>
                                    <li><a href="#">Allergic Issue</a> <span>6</span></li>
                                    <li><a href="#">Cardiology</a> <span>9</span></li>
                                    <li><a href="#">Neurology Sargery</a> <span>8</span></li>
                                    <li><a href="#">Allergic Issue</a> <span>1</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-sidebar">
                            <div className="blog-sidebar_heading">
                                <h4>Tags</h4>
                            </div>
                            <div className="blog-sidebar_wrap">
                                <ul className="blog-sidebar_tags">
                                    <li><a href="#">Medical</a></li>
                                    <li><a href="#">Health</a></li>
                                    <li><a href="#">Doctor</a></li>
                                    <li><a href="#">Health Lifestyle</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Eye Care</a></li>
                                    <li><a href="#">Allergic</a></li>
                                    <li><a href="#">Diagnosis</a></li>
                                    <li><a href="#">Rehabitation</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-sidebar">
                            <div className="blog-sidebar_heading">
                                <h4>Follow Us</h4>
                            </div>
                            <div className="blog-sidebar_wrap">
                                <ul className="blog-sidebar_social">
                                    <li>
                                        <a href="#"><i className="fab "><FaFacebook /></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab "><FaTwitter /></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab "><FaTiktok /></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab "><FaInstagram /></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-join_us">
                            <div className="blog-join_us-content">
                                <h6>AD BANNER</h6>
                                <h3>JOIN US</h3>
                                <p>Lorem ipsum dolor sit amet conse</p>
                                <a href="#" className="btn btn-dark">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Page;