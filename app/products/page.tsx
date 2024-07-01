
import Products from "../components/products";
import SecondHero from "../components/seconderHero";
import Sidebar from "../components/sidebar";
const Page = () => {


    return (<>
        <SecondHero nextPage="Products" description={"Explore our curated selection of premium skincare and haircare products available for purchase. Enhance your beauty routine with trusted brands recommended by our professionals."} />
        <section className="light">
            <div className="container container-custom " style={{ position: "relative" }}>
                <div className="row">
                    <Sidebar />
                    <Products />
                </div>
            </div>

        </section>
    </>);
}

export default Page;