import Link from "next/link";

const Hero = () => {
    return (<>   <div className="banner-slider" >
        <div className="banner1">
            <div className="container " style={{ padding: "3rem 0" }}>
                <div className="row">
                    <div className="col-md-9 col-lg-5">

                        <div className="main-title main-title-style2 ">
                            <span>We are here for you</span>
                            <h1>
                                Enhance Your Beauty and Self-Confidence.
                            </h1>
                            <p>
                                Experience the latest in cosmetology and hair restoration. Our expert team is dedicated to helping you look and feel your best with personalized treatments designed to enhance your natural beauty.
                            </p>
                            <Link href="/services" className="btn btn-dark btn-blue ">Discover Our Services</Link>
                            {/* <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="play-btn popup-youtube"><i className="fas fa-play"></i></a> */}
                        </div>


                    </div>

                </div>
            </div>
        </div>
        {/* <div className="banner1">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-5">

                        <div className="main-title main-title-style2">
                            <span>We are here for you</span>
                            <h1>
                                What Makes Us Better, Makes You Better.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex.
                                ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                ipsum dolor sit amet.
                            </p>
                            <a href="#" className="btn btn-primary">Make Appointment</a>
                            <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="play-btn popup-youtube"><i className="fas fa-play"></i></a>
                        </div>


                    </div>

                </div>
            </div>
        </div> */}
    </div></>);
}

export default Hero;