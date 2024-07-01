const Counter = () => {
    return (<>
        <section className="counter">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-3">
                        <div className="counter-block">
                            <img src="/images/counter1.png" alt="#" />
                            <div className="counter-text">
                                <h2>60+</h2>
                                <p>Expert Doctors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-3">
                        <div className="counter-block">
                            <img src="/images/counter2.png" alt="#" />
                            <div className="counter-text">
                                <h2>1000+</h2>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-3">
                        <div className="counter-block">
                            <img src="/images/counter3.png" alt="#" />
                            <div className="counter-text">
                                <h2>150+</h2>
                                <p>Award Winner</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-end">
                        <div className="counter-btn_block">
                            <a href="#" className="btn btn-dark">BOOK NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Counter;