
"use client"
import Link from "next/link"
import Slider from "react-slick"
const brand_1 = "/images/herimg1.webp"
const brand_2 = "/images/herimg2.webp"
const brand_3 = "/images/herimg3.webp"
const brand_4 = "/images/herimg6.webp"
const brand_5 = "/images/herimg5.webp"
const brand_6 = "/images/herimg4.webp"


const brand_data: string[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6]
const HeroImages = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (<>



        <Slider {...settings} >
            {brand_data.map((brand, index) => (
                <div key={index}  >
                    <img src={brand} style={{ width: "100%" }} className="heroImages" alt="Client Logo" />
                </div>
            ))}

        </Slider>

    </>);
}

export default HeroImages;