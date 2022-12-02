import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/products.css"



function Product({ image, p_name, price, desc }) {
    const [quantity, setQuantity] = useState();

    return (

        <div className="col products">
            <div className='card' style={{ width: "18rem" }}>
                <img src={image} class="card-img-top p-2" alt="products" />
                
                <div className="card-body">
                    <h5 className="card-title">{p_name}</h5>
                    <p className='card-text fw-bolder'>P{price}</p>
                    <p className="card-text">{desc}</p>
                    <div className="row gap-2">
                        <a href="#" className="btn btn-danger">ADD TO CART</a>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">QUICK VIEW</button>
                    </div>
                </div>
            </div>
           
            <br/>
            {/*modalss*/}
            <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={image} className="img-fluid h-auto" alt="product" />
                                </div>
                                <div className="col">
                                    <h2>Car Paint</h2>
                                    <p className="mt-4 fs-4">Price: ₱1000.00</p>
                                    <div className="row gap-2">
                                        <p className="col-4 fs-6">Quantity: </p>
                                        <input type='number' className="col-6 h-25" />
                                    </div>
                                    <button type="button" className="btn btn-secondary me-1 mt-3" data-bs-dismiss="modal">CLOSE</button>
                                    <button className="btn btn-primary mt-3 btn-danger" data-bs-dismiss="modal"><Link type="button" to="/buy" className="text-light text-decoration-none" role="button">BUY IT NOW</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;