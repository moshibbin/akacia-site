'use client'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCheck, FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import SecondHero from "../../../components/seconderHero";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { servicesList } from "../../../data/services";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/navigation'
type Inputs = {
    name: string,
    date: string,
    phone: string,
    city: string
}
const Page = () => {
    const [data, setData] = useState({
        date: "2",
        name: "2",
        phone: "2",
        city: "2",
        service: ""
    })
    const [show, setShow] = useState(false);
    const router = useRouter();

    const params = useParams<{ param: string, param2: string }>();
    const { param, param2 } = params;

    const service = servicesList.filter(serv => serv.id === parseInt(param))
    const subService = service[0].servicesInclude[parseInt(param2)].name

    const form = useForm<Inputs>()
    const { register, handleSubmit, formState: { errors } } = form;
    const WHATSAPP_API_URL = 'https://api.whatsapp.com/send';
    const phoneNumber = '+252653140475'; // Replace with actual phone number
    const message = ` Client Name: ${data.name} Client Number: ${data.phone}  Client City: ${data.city} Appoitment Date: ${data.date} Select Services: ${data.service}`;

    const handleClose = () => {
        setShow(false);
        router.push(`${WHATSAPP_API_URL}?phone=${phoneNumber}&text=${message}`);
    };
    const handleShow = () => setShow(true);


    const onSubmit: SubmitHandler<Inputs> = (data) => {

        setData({
            date: data.date,
            name: data.name,
            phone: data.phone,
            city: data.phone,
            service: subService,
        })
        setShow(true)

    }


    return (<>
        <SecondHero nextPage="Appointment" description={"Schedule your visit to our cosmetology and hair clinic with ease. Choose your preferred treatment, select a convenient time, and let our expert team take care of the rest."} />

        <section className="space aboutd-form" style={{ marginTop: "10rem" }}>
            <div className="container container-custom">
                <div className="row">

                    <div className="appointment-form"  >
                        <div className="booking-form-style2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3>Book Online</h3>
                                <div className="form-group form-group-cutom">

                                    <input type="date" {...register("date", { required: true })} className="form-control form-custom" placeholder="Date and time" />
                                    {errors.date && <span style={{ color: "red" }}>Please Choose Date</span>}
                                </div>
                                <div className="form-group form-group-cutom">
                                    <input type="text" {...register("name", { required: true })} className="form-control form-custom" placeholder="Enter Your Name" />
                                    <i className=""><FaUser /></i>
                                    {errors.name && <span style={{ color: "red" }}>Please Enter Your Name </span>}
                                </div>
                                <div className="form-group form-group-cutom">
                                    <input type="number" {...register("phone", { required: true })} className="form-control form-custom" placeholder="Phone number" />
                                    {/* <i ><BsFillTelephoneFill /></i> */}
                                    {errors.phone && <span style={{ color: "red" }}>Please Enter Your Phone</span>}
                                </div>

                                <div className="form-group form-group-cutom">
                                    <input type="text"  {...register("city", { required: true })} className="form-control form-custom" placeholder="Enter your City" />
                                    <i className=""><IoLocationSharp /></i>
                                    {errors.city && <span style={{ color: "red" }}>Please Enter Your City</span>}
                                </div>


                                <button type="submit" className="btn btn-dark w-100" >BOOK NOW</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Dear Client,
                    Thank you for booking with us! We're excited to have you join us for "{subService}" .
                    If you have any questions or need to make changes to your booking, please don't hesitate to contact us at +123 456 7890.</Modal.Body>
                <Modal.Footer>

                    <Button variant="success" onClick={handleClose}>
                        Oky
                    </Button>
                </Modal.Footer>
            </Modal>
        </section></>);
}

export default Page;