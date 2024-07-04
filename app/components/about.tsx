const About = () => {
    return (<>
        <div className="row">
            <div className="col-md-12">

                <div className="about-video_block">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <a target="_blank" href="https://www.facebook.com/Akacia.Clinic.Hargeisa/videos/981508777026843"
                                className="video-play-img popup-youtube">

                                <img src="images/about-img.jpg" className="img-fluid w-100" alt="#" />
                                <div className="video-play-btn">
                                    <div className="video-play-icon">
                                        <i className="fas fa-play"></i>
                                    </div>
                                    <span>PLAY VIDEO</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="video-play-text">
                                <h2 style={{ fontSize: "30px" }}>Short Story About Akacia Cosmetology and Hair Clinic.</h2>
                                <p>
                                    Established in Hargeisa, Somaliland in 2018, Akacia Cosmetology and
                                    Hair Clinic has become a beacon of excellence in cosmetology and hair
                                    care. Our dedication to health and beauty has led to rapid growth,
                                    demonstrated by our expanding range of services from basic skincare
                                    to advanced laser treatments and cosmetologically innovations,
                                    catering to a growing clientele seeking top-tier wellness solutions.
                                </p>
                                {/* <p>
                                    Sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostru
                                    <a href="#">Readmore</a>
                                </p> */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="facilities blue" >
                                            <h3>1000+</h3>
                                            <span style={{ color: "white" }}>Happy Patients</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="facilities gray">
                                            <h3>20+</h3>
                                            <span style={{ color: "white" }}>Expert Doctors</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="facilities gray">
                                            <h3>6+</h3>
                                            <span style={{ color: "white" }}>Experience Years</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="facilities blue">
                                            <h3>30+</h3>
                                            <span style={{ color: "white" }}>Special Services</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div></>);
}

export default About;