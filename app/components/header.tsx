'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";
import { PiShoppingCartFill } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { set } from "sanity";
const Header = () => {
    const menu = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "About", href: "/about" },
        { id: 3, label: "Services", href: "/services" },
        { id: 3, label: "Appointment", href: "/appointment" },
        // { id: 4, label: "Blogs", href: "/blogs" },
        { id: 5, label: "Contact", href: "/contact" },
    ]
    const [open, setOpen] = useState(false)
    return (
        <div className="main-header">
            <section className="top-bar-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-bar">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <a className="navbar-brand logo" href="/"><img src="/images/logo1.png" alt="#" /></a>
                                    </div>
                                    <div className="col-md-9 d-flex align-items-end">
                                        <ul className="ml-auto">
                                            <li>
                                                <img src="/images/mail-icon.png" alt="#" />
                                                <div>
                                                    <span>Mail us</span>
                                                    <Link style={{ textDecoration: "none", color: "black" }} href="mailto:info@akaciahrg.com">
                                                        <h4>Info@akaciahrg.com
                                                        </h4>
                                                    </Link>

                                                </div>
                                            </li>
                                            <li>
                                                <img src="/images/call-icon.png" alt="#" />
                                                <div>
                                                    <span>Toll Free</span>
                                                    <Link style={{ textDecoration: "none", color: "black" }} href="tel:+252636666782">
                                                        <h4>+252636666782</h4>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="appointment-btn">
                                                <Link href="/appointment" className="btn btn-dark btn-blue ">Make Appointment</Link>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="light nav-big " >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <nav className="navbar navbar-expand-lg navbar-light">
                                <button style={{ color: "white" }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" onClick={() => setOpen(open ? false : true)} style={{ marginTop: "1.5rem" }}></span>
                                </button>
                                <div className={open ? "collapse navbar-collapse show " : "collapse navbar-collapse flex "} >
                                    <ul className="navbar-nav mr-auto nav-sub">
                                        {menu.map(item => (

                                            <li className="nav-item " key={item.id}>
                                                {
                                                    open ? <Link className="nav-link " href={item.href} role="button" onClick={() => setTimeout(() => setOpen(false), 500)} >
                                                        {item.label}
                                                    </Link> : <Link className="nav-link " href={item.href} role="button" >
                                                        {item.label}
                                                    </Link>
                                                }


                                            </li>
                                        ))}

                                    </ul>
                                    <ul className="nav-icon-wrap nav-icon-wrap-hidden">
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.facebook.com/Akacia.Clinic.Hargeisa"><CgFacebook /></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.instagram.com/akacia_cosmetology_and_hair_cl/?igsh=OGQ5ZDc2ODk2ZA%3D%3D"><BiLogoInstagramAlt /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.tiktok.com/@akaciaclinic?_t=8nn6rzAKwUw&_r=1"><AiFillTikTok /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://wa.me/+252636666782"><FaWhatsapp /></a>
                                        </li>
                                        <li className="nav-item cart-seperadte">
                                            <a className="nav-link" href="#">
                                                {/* <PiShoppingCartFill /> */}
                                                {/* <span>2</span> */}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="#"><IoMdMenu /></a> */}
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div></div>);
}

export default Header;