const WhyChooseUs2 = () => {
    return (<section className="space background-bg4">
        <div className="container container-custom">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="appointment-form_wrap">
                        <div className="heading-style1">
                            <span>Online Booking</span>
                            <h2>Make an Appointment</h2>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-group-cutom">
                                        <input type="email" className="form-control form-custom" placeholder="Enter Your Name" />
                                        <i className="far fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-cutom">
                                        <input type="number" className="form-control form-custom" placeholder="Date and time" />
                                        <i className="far fa-clock"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-group-cutom">
                                        <input type="number" className="form-control form-custom" placeholder="Enter phone number" />
                                        <i className="fas fa-phone"></i>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-cutom">
                                        <input type="text" className="form-control form-custom" placeholder="Select location" />
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-group-cutom">
                                        <input type="text" className="form-control form-custom" placeholder="Choose department" />
                                        <i className="far fa-circle"></i>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-cutom">
                                        <input type="text" className="form-control form-custom" placeholder="Select doctor" />
                                        <i className="far fa-user"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group form-group-cutom">
                                        <label >Your Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <a href="#" className="btn btn-success">BOOK NOW</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="why-choose_block">
                        <div className="heading-style1">
                            <span>Why Us</span>
                            <h2>Why Choose Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eius mod tempor inc ididuntut</p>
                            <hr />
                        </div>
                        <div className="whychoose-wrap">
                            <img src="images/icon1.png" alt="#" />
                            <div className="whychoose-text_block">
                                <h4>Fastest Growing Clinic</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, su</p>
                            </div>
                        </div>
                        <div className="whychoose-wrap">
                            <img src="images/icon2.png" alt="#" />
                            <div className="whychoose-text_block">
                                <h4>Fastest Growing Clinic</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, su</p>
                            </div>
                        </div>
                        <div className="whychoose-wrap">
                            <img src="images/icon3.png" alt="#" />
                            <div className="whychoose-text_block">
                                <h4>Fastest Growing Clinic</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, su</p>
                            </div>
                        </div>
                        <div className="whychoose-wrap">
                            <img src="images/icon4.png" alt="#" />
                            <div className="whychoose-text_block">
                                <h4>Fastest Growing Clinic</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, su</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default WhyChooseUs2;