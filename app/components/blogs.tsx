import { FaComment, FaEye } from "react-icons/fa";
const Blogs = () => {
    return (<>
        <section className="space light">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-style1">
                            <span>Blog ----</span>
                            <h2>Latest News & Events</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-slider blog-slider">


                            <div className="blog-grid-wrap">
                                <div className="blog-grid-img">
                                    <img src="images/blog-grid2.jpg" className="img-fluid" alt="#" />
                                    <div className="blog-grid-date">
                                        <h5>15</h5>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="blog-grid_content">
                                    <div className="blog-grid-top_icon">
                                        <label>Mediacal</label>
                                        <p><i ><FaEye /></i>233 <span>|</span> <i ><FaComment /></i>33</p>
                                    </div>
                                    <div className="blog-grid_text">
                                        <a href="#">
                                            <h4>How often should I replace my toothbrush?..</h4>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eius mod tempor </p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-grid-wrap">
                                <div className="blog-grid-img">
                                    <img src="images/blog-grid2.jpg" className="img-fluid" alt="#" />
                                    <div className="blog-grid-date">
                                        <h5>15</h5>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="blog-grid_content">
                                    <div className="blog-grid-top_icon">
                                        <label>Mediacal</label>
                                        <p><i ><FaEye /></i>233 <span>|</span> <i ><FaComment /></i>33</p>
                                    </div>
                                    <div className="blog-grid_text">
                                        <a href="#">
                                            <h4>How often should I replace my toothbrush?..</h4>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eius mod tempor </p>
                                    </div>
                                </div>
                            </div>


                            <div className="blog-grid-wrap">
                                <div className="blog-grid-img">
                                    <img src="images/blog-grid4.jpg" className="img-fluid" alt="#" />
                                    <div className="blog-grid-date">
                                        <h5>26</h5>
                                        <p>May</p>
                                    </div>
                                </div>
                                <div className="blog-grid_content">
                                    <div className="blog-grid-top_icon">
                                        <label>Mediacal</label>
                                        <p><i ><FaEye /></i>233 <span>|</span> <i ><FaComment /></i>33</p>
                                    </div>
                                    <div className="blog-grid_text">
                                        <a href="#">
                                            <h4>Telemedicine overprescribes antibiotics: Are you real...</h4>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eius mod tempor </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></>);
}

export default Blogs;