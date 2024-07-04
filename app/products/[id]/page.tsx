'use client'
import { Porduct, productList } from "../../data/products";;
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


const Page = () => {

    const params = useParams<{ id: string }>();
    const [count, setCount] = useState(1)
    const product = productList.filter((item: Porduct) => item.id === parseInt(params.id))

    const router = useRouter()

    const WHATSAPP_API_URL = 'https://api.whatsapp.com/send';
    const phoneNumber = '+252653140475'; // Replace with actual phone number
    const message = ` Porudct Name: ${product[0].name} Product Description: ${product[0].description} product Quantity: ${count}`;

    const handleSend = () => {
        router.push(`${WHATSAPP_API_URL}?phone=${phoneNumber}&text=${message}`);
    };
    return (<>
        <div className="container container-custom"> <div className="service-detail_wrap">

            <div className="product-detail">
                <div className="product-img">
                    <img src={product[0].image} alt="product image" />
                </div>
                <div className="product-dec">
                    <h3>{product[0].name}</h3>
                    <div className="starts">
                        <FontAwesomeIcon className="start" icon={faStar} />
                        <FontAwesomeIcon className="start" icon={faStar} />
                        <FontAwesomeIcon className="start" icon={faStar} />
                        <FontAwesomeIcon className="start" icon={faStar} />
                        <FontAwesomeIcon className="start" icon={faStar} />
                    </div>
                    <p>${product[0].price.discount}.00 <span className="descount">
                        ${product[0].price.original}.00</span></p>

                    <p>{product[0].description}</p>
                    <div className="buy">

                        <div className="quantities">
                            <p>Quantity :</p>
                            <div className="add">
                                <div>
                                    <FontAwesomeIcon onClick={() => setCount(count > 1 ? count - 1 : count)} className="quantity" icon={faMinus} style={{ boxSizing: "inherit" }} />
                                </div>
                                <div className="count">{count}</div>
                                <div>
                                    <FontAwesomeIcon onClick={() => setCount(count + 1)} className="quantity" icon={faPlus} style={{ boxSizing: "inherit" }} />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSend} className="btn btn-cart">Get Now <FaWhatsapp /></button>
                    </div>
                </div>
            </div>
        </div>
        </div></>);
}

export default Page;