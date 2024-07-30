'use client'
import Link from "next/link";
import Slider from "react-slick"
import HeroImages from "./heroImages";

const brand_1 = "/images/herimg1.png"
const brand_2 = "/images/herimg1.png"
const brand_3 = "/images/herimg1.png"
const brand_data: string[] = [brand_1, brand_2, brand_3, brand_1, brand_3]
const Hero2 = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    }
    return (<div>

        <div className="banner-slider" >
            <div className="banner1">

                <div className="custom-container px-4 hero-P">
                    <div className="row" >
                        <div className="col-sm-12  col-lg-5">
                            <div className="main-title main-title-style2 ">
                                <span>We are here for you</span>
                                <h1>
                                    Enhance Your Beauty and Self-Confidence.
                                </h1>
                                <p style={{ paddingRight: "2rem" }}>
                                    Experience the latest in cosmetology and hair restoration. Our expert team is dedicated to helping you look and feel your best with personalized treatments designed to enhance your natural beauty.
                                </p>
                                <Link href="/services" className="btn btn-dark btn-blue ">Discover Our Services</Link>
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-7 " style={{ paddingTop: "1.5rem " }}>   <HeroImages /></div>
                    </div>

                </div>


            </div>

        </div>
    </div>);
}

export default Hero2;