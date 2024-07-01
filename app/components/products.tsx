'use client'
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { productList } from "../data/products";

import { useState } from "react";
import Pagination from "./pagination";


const itemsPerPage = 9;
const items = productList;
const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Calculate the start and end indices for the current page items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    const product = productList;


    return (<>
        <div className="col-md-12 col-lg-9">
            <div className="service-detail_wrap" style={{ marginTop: "90px" }}>
                <div className="products">

                    {currentItems.map((product => (
                        <div className="product" key={product.id} >

                            <Link className="product-link" href={"/products/" + product.id}>
                                <div className="product-image">
                                    <div className="sale">sale</div><img src={product.image} alt="product image" /></div>
                            </Link>
                            <div className="product-content">
                                <Link className="product-link" href={"/products/" + product.id}><h6>{product.name}</h6></Link>
                                <div className="info">

                                    <div>
                                        <div className="starts">
                                            <FontAwesomeIcon className="start" icon={faStar} />
                                            <FontAwesomeIcon className="start" icon={faStar} />
                                            <FontAwesomeIcon className="start" icon={faStar} />
                                            <FontAwesomeIcon className="start" icon={faStar} />
                                            <FontAwesomeIcon className="start" icon={faStar} />
                                        </div>
                                        <p>${product.price.discount}.00<span className="descount">
                                            ${product.price.original}.00</span></p>
                                    </div>
                                    <Link className="product-link" href={"/products/" + product.id}>
                                        <div className="cart-icon"><FontAwesomeIcon icon={faCartShopping} /></div> </Link>

                                </div>
                            </div>
                        </div>
                    )))}



                </div>

                <div className="pagination">
                    <div></div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    </>);
}

export default Products;