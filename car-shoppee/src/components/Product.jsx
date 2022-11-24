import React from "react";



function Product({image}) {
    return (
        <div className='card' style={{width: "18rem"}}>
            <img src={image} class="card-img-top" alt="producrs"/>
            <div class="card-body">
                <h5 class="card-title">Car Paint</h5>
                <p className='card-text fw-bolder'>P10000.00</p>
                <p className="card-text">Paint for ur carz</p>
                <a href="#" class="btn btn-success">Add to cart</a>
            </div>
        </div>
    )
}

export default Product;