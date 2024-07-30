import Appointment from "../components/appointment";
import SecondHero from "../components/seconderHero";

const Page = () => {
    return (<>
        <SecondHero nextPage="Appointment" description={"Easily choose your preferred date and time, and we'll take care of the rest. Quick and simple."} />
        <Appointment /></>);
}

export default Page;