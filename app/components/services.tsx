import Link from "next/link";
import { servicesList } from "../data/services2";



const Services = () => {


    return (<>
        <section className="space light">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-style1">
                            <span>Our Services</span>
                            <h2>High Quality Services for You</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesList.slice(0, 6).map((services, index) => (
                        <div className="col-md-4" key={services.id}>
                            <div className={index % 2 === 0 ? `service-block yellow` : "service-block  blue"} style={{ color: "white" }}>
                                {/* <img src={services.icon2} alt="#" /> */}
                                <div className="number">{index + 1}</div>
                                <h3 style={{ color: "white" }}>{services.name}</h3>
                                <p>{services.description.length < 100 ? services.description : services.description.slice(0, 101) + "..."} </p>
                                <Link href={`/services/${services.id}`} className="btn btn-dark">READ MORE</Link>
                                <div className="service-bg-icon">
                                    <img src="/images/services-bg1.png" className="img-fluid" alt="#" />
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center service-help_link">
                            Contact us for better help and services.
                            <Link href="/contact">Let’s get started</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section></>);
}

export default Services;