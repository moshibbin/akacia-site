import Link from "next/link";

interface Props {
    nextPage: string
    description: string
    font?: boolean
}
const SecondHero = ({ nextPage, description, font }: Props) => {

    return (<>
        <section className="space sub-header " style={{ marginTop: "6rem" }}  >
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-6">
                        <div className="sub-header_content">
                            <p>{nextPage.toUpperCase()}</p>
                            <p style={{ fontSize: "20px", fontWeight: "400" }}>{description}</p>
                            <span>< Link style={{ color: "white", textDecoration: "none" }} href={"/"}>Home </ Link >/ {nextPage}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sub-header_main">
                            <h2 style={font ? { fontSize: "50px" } : {}}>{nextPage}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default SecondHero;