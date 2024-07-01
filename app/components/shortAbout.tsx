import { FaChevronRight } from "react-icons/fa";
const ShortAbout = () => {
    const setting = {
        src: "/images/video.mp4",
        width: "550",
        height: "560",
        controls: true,
        autoPlay: false,
        loop: true,
        muted: true, // Ensure muted is true
        playsInline: true // Add playsInline
    }
    return (<>
        <section className="space">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="news-img-block">
                            {/* <img src="images/play-img.png" className="img-fluid w-100" alt="#" /> */}
                            {/* <a className="video-play-button popup-youtube" href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                                <span></span>
                            </a> */}
                            <video
                                width={setting.width}
                                height={setting.height}
                                autoPlay={true} muted={true} playsInline={true} loop={true}
                            >
                                <source src={setting.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* <video className="img-fluid w-100">
                                <source src="/images/video.mp4" type="video/mp4"></source>
                            </video> */}
                            {/* <div id="video-overlay" className="video-overlay">
                                <a className="video-overlay-close">&times;</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="video-play-text">
                            <span>Work Process</span>
                            <h2>Our Easy Process</h2>
                            <p>
                                At Akacia Cosmetology and Hair Clinic, our easy process starts with a warm welcome and a personalized consultation, understanding your needs and creating a tailored treatment plan for optimal care.
                            </p>
                            <p>
                                Our expert team uses the latest techniques and technologies to deliver outstanding results. We ensure comfort, precision, and continuous support, reflecting our commitment to your beauty and well-being.
                            </p>
                            <hr />
                            <div className="newsletter-subscribe">
                                <h4>Subscribe to our Newsletter</h4>
                                <div className="newsletter-subscribe_form">
                                    <input type="text" className="form-control" placeholder="Enter Your Email" />
                                    <a href="#"><i className=""><FaChevronRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></>);
}

export default ShortAbout;