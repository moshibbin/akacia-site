import Link from "next/link";



const Conculting = () => {
    return (<>
        <section className="bg-img3" >
            <div className="container ">
                <div className="rsow cunsulting">
                    <div className=" clumn1">
                        <img style={{ width: "100%", height: "100%" }} src="/images/nurse-hijab.png" alt="" />
                    </div>
                    <div className="">
                        <div className="consultant-content">
                            <h2>We Believe in a Healthier You</h2>
                            <p>
                                At Akacia Cosmetology and Hair Clinic, our mission is to promote a healthier you. Our holistic approach combines advanced treatments with personalized care, promoting wellness and beauty from the inside out. Trust us to help you achieve your healthiest, most radiant self.
                            </p>

                            <Link href="/contact" className="btn btn-dark">Get a Consultant</Link>

                        </div>
                    </div>
                </div>
            </div>
        </section></>);
}

export default Conculting;