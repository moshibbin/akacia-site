const Booking = () => {
    return (<>
        <div className="col-md-12 " style={{ marginTop: "3.5rem" }}>

            <ul className="booking-form">
                <li><input type="text" className="form-control" placeholder="Enter Your Name" /><i
                    className="fas fa-user"></i></li>
                <li><input type="text" className="form-control" placeholder="Select Your Location" /><i
                    className="fas fa-map-marker-alt"></i></li>
                <li>
                    <select className="custom-select form-control">
                        <option selected>Select a Service</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </li>
                <li className="form-btn">
                    <a href="#" className="btn btn-success">BOOK NOW</a>
                </li>
            </ul>

        </div>
    </>);
}

export default Booking;