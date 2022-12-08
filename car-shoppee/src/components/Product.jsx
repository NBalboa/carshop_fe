import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import {useDispatch} from "react-redux"




function Product({product}) {

    
    const dispatch = useDispatch()
    return (

        <div className="col products">
            <div className='card' style={{ width: "18rem" }}>
                <Link to={'/productdetails/' + product.id}>
                    <img src={`http://localhost:3000/${product.main_image}`} className="card-img-top p-2" style={{height: 200}} alt="products" />
                </Link>
                <div className="card-body">
                <Link to={'/productdetails/' + product.id} className="text-decoration-none text-dark">
                    <h5 className="card-title ">{product.name}</h5>
                </Link>
                    <p className='card-text fw-bolder'>P{(product.price).toFixed(2)}</p>
                    <div className="row gap-2">
                        <button className="btn btn-dark " onClick={()=>dispatch(addToCart(product))} >ADD TO CART</button>
                    </div>
                </div>
            </div>
           
                
        </div>

    )
}

export default Product;