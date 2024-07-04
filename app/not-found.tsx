import Link from "next/link";

const NotFound = () => {
    return (<>   <section className="error d-flex align-items-center">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="error-box">
                        <h1>404</h1>
                        <h2>Uh-Oh...Page not found!</h2>
                        <p>Oops! The page you’re looking for doesn’t seem to exist. It might have been moved or deleted. Please check the URL or return to the homepage. </p>
                        <Link href="/" className="btn btn-dark">HOMEPAGE</Link>
                    </div>
                </div>
            </div>
        </div>
    </section></>);
}

export default NotFound;