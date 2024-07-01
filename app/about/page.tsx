import About from "../components/about";
import Brand from "../components/brand";
import Conculting from "../components/conculting";
import Info from "../components/info";
import SecondHero from "../components/seconderHero";
import ShortAbout from "../components/shortAbout";
import Testimonail from "../components/testimonail";

const Page = () => {
    return (<>
        <SecondHero nextPage={"About us"} description={"Learn more about our mission, values, and the expert team dedicated to providing exceptional cosmetology and hair care services."} />
        <section className="about-section" style={{ marginTop: "6rem" }}>
            <div className="container container-custom">
                <div className="row">

                    {/* <FeaturesIcon /> */}
                    <About />
                </div>
            </div>
        </section>
        <Info />
        <ShortAbout />
        <Conculting />
        <div style={{ padding: "5rem 0" }}>
            <Testimonail />
        </div>
        <div className="container container-custom" style={{ padding: "3rem 0" }} >


            <Brand />

        </div>
    </>);
}

export default Page;