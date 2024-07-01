import SecondHero from "../components/seconderHero";
import Services2 from "../components/services2";
import Satisfaction from "../components/stf";


const Page = () => {
    return (<>

        <SecondHero nextPage="Services" description={"Explore the wide range of treatments and services we offer to enhance your beauty and confidence."} />
        <Services2 />
        <Satisfaction /></>);
}

export default Page;