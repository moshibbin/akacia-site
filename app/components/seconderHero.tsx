import Link from "next/link";

interface Props {
    nextPage: string
    description: string
}
const SecondHero = ({ nextPage, description }: Props) => {

    return (<>
        <section className="space sub-header">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-6">
                        <div className="sub-header_content">
                            <p>{nextPage.toUpperCase()}</p>
                            <p style={{ fontSize: "16px", fontWeight: "400" }}>{description}</p>
                            <span>< Link style={{ color: "white", textDecoration: "none" }} href={"/"}>Home </ Link >/ {nextPage}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sub-header_main">
                            <h2>{nextPage}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default SecondHero;