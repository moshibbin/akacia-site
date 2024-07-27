
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Booking from "./components/booking";
import FeaturesIcon from "./components/featuresIcons";
import About from "./components/about";
import Services from "./components/services";
import WhyChooseUs from "./components/whyChooseUs";
import ShortAbout from "./components/shortAbout";
import Satisfaction from "./components/stf";
import Booking2 from "./components/booking2";
import Testimonail from "./components/testimonail";
import Conculting from "./components/conculting";
import Blogs from "./components/blogs";
import Counter from "./components/counter";
import Footer from "./components/footer";
import { servicesList } from "./data/services";
import ReactWhatsapp from "react-whatsapp";
import Hero2 from "./components/hero2";


export default async function Home() {

  return (
    <>


      <Hero2 />
      <section className="about-section">
        <div className="container container-custom">
          <div className="row">

            <FeaturesIcon />
            <About />
          </div>
        </div>
      </section>
      <Services />
      <WhyChooseUs />
      <ShortAbout />
      <Satisfaction />
      <Booking2 />

      <Conculting />



    </>
  );
}
