import React, {useState} from "react";
import Cards from "../components/Cards";
import Brand1 from "../assets/img/brand-1.png"
import Product from "../components/Product";
import sample from "../assets/img/brand-1.png"
import NavBar from "../components/NavBar";

function Products() {
    return (
        <div>
            <NavBar/>
            <div className="card-group">
                <Cards image={Brand1}/>
            </div>
            <Product image={sample}/>
            <Product image={sample}/>
            <Product image={sample}/>
            <Product image={sample}/>
            <Product image={sample}/>
            <Product image={sample}/>
        </div>
    )
}

export default Products;