import Link from "next/link";

const Satisfaction = () => {
    return (<>
        <section className="pricing-bg space">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7">
                        <div className="twentytwenty-container pricing-img-wrap">
                            <img src="images/pricing-img.jpg" className="img-fluid w-100" alt="#" />
                            {/* <img src="images/pricing-img.jpg" className="img-fluid w-100" alt="#" /> */}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="pricing-text-wrap">
                            <div className="stylish-heading">
                                <h2>100% Satisfaction Guaranteed...
                                </h2>
                            </div>
                            <p>
                                At Akacia Cosmetology and Hair Clinic, we stand by our commitment to excellence with our 100% Satisfaction Guarantee. Your happiness and confidence in our services are our top priorities.</p>
                            <div className="pricing-view_block">
                                <div className="pricing-view">
                                    <h4>1000+</h4>
                                    <p>Happy Patients</p>
                                </div>
                                <div className="pricing-view">
                                    <h4>6+</h4>
                                    <p>Experience Years</p>
                                </div>
                            </div>
                            <Link href="/contact" className="btn btn-dark">Contact Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section></>);
}

export default Satisfaction;