import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import {useDispatch} from "react-redux"




function Product({product}) {

    
    const dispatch = useDispatch()
    return (

        <div className="col products">
            <div className='card' style={{ width: "18rem" }}>
                <img src={product.path} className="card-img-top p-2" alt="products" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className='card-text fw-bolder'>P{product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <div className="row gap-2">
                        <button className="btn btn-danger" onClick={()=>dispatch(addToCart(product))} >ADD TO CART</button>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">QUICK VIEW</button>
                    </div>
                </div>
            </div>
           
            <br/>
            {/*modalss*/}
            <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={product.path} className="img-fluid h-auto" alt="product" />
                                </div>
                                <div className="col">
                                    <h2>Car Paint</h2>
                                    <p className="mt-4 fs-4">Price: ₱{product.price}</p>
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