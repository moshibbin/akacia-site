import Link from "next/link";
import { servicesList } from "../data/services";

const Services2 = () => {

    return (
        <section className="services-2">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sub-title_center">
                            <span>---- Our Services ----</span>
                            <h2>High Quality Services for You</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesList.map((services, index) => (
                        <div className="col-md-4" key={services.id}>
                            <div className="service-box2">
                                {/* <img src={services.icon} className="service-box2-img" alt="#" /> */}
                                <div className="service-number service-box2-img">{index + 1}</div>
                                <h3>{services.name}</h3>
                                <p>{services.description.length < 100 ? services.description : services.description.slice(0, 101) + "..."} </p>
                                <Link href={`/services/${services.id}`}>READ MORE</Link>
                                <div className="service-box2-bg">
                                    <img src="images/service-box-bg.png" className="img-fluid w-100" alt="#" />
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <div className="service-box2">
                            <img src="images/dental.svg" className="service-box2-img" alt="#" />
                            <h3>Dental Cleaning</h3>
                            <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore </p>
                            <a href="#">READ MORE</a>
                            <div className="service-box2-bg">
                                <img src="images/service-box-bg.png" className="img-fluid w-100" alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box2">
                            <img src="images/teeth.svg" className="service-box2-img" alt="#" />
                            <h3>Teeth Whitening</h3>
                            <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore </p>
                            <a href="#">READ MORE</a>
                            <div className="service-box2-bg">
                                <img src="images/service-box-bg.png" className="img-fluid w-100" alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box2">
                            <img src="images/gums.svg" className="service-box2-img" alt="#" />
                            <h3>Teeth Fillings</h3>
                            <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore </p>
                            <a href="#">READ MORE</a>
                            <div className="service-box2-bg">
                                <img src="images/service-box-bg.png" className="img-fluid w-100" alt="#" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Services2;