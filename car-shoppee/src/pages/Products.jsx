import React, {useState} from "react";
import Cards from "../components/Cards";
import Brand1 from "../assets/img/brand-1.png"
import Product from "../components/Product";
import sample from "../assets/img/brand-1.png"
import NavBar from "../components/NavBar";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "../assets/css/products.css"
import {BsSearch} from "react-icons/bs"
function Products() {
    const [items,setItem] = useState([
        {
            id: 1,
            name: "Car Paint",
            price: 1000.00,
            path: Brand1 ,
            description: "my description bitch",
        },
        {
            id: 2,
            name: "Car Paint",
            price: 1000.00,
            path: Brand1 ,
            description: "my description bitch",
        },
        {
            id: 3,
            name: "Car Paint",
            price: 1000.00,
            path: Brand1 ,
            description: "my description bitch",
        },
        {
            id: 4,
            name: "Car Paint",
            price: 1000.00,
            path: Brand1 ,
            description: "my description bitch",
        },
        {
            id: 5,
            name: "Car Paint",
            price: 1000.00,
            path: Brand1 ,
            description: "my description bitch",
        },
        {
            id: 6,
            name: "Car Paint",
            price: 1000.00,
            path: Brand1 ,
            description: "my description bitch",
        }
    ])
    return (
        <div>
            <NavBar/>
            <Container className="m-5 col-8">
            <Row className="gap-4">
            <div className="modal-body">
                    <div className="search">
                        <form action="">
                            <input type="text" placeholder="Search..."/>
                            <select name="" id="">
                                <option value="">Name</option>
                                <option value="">Category</option>
                            </select>
                            <button type="submit"><a href='#'><BsSearch/></a></button>
                        </form>
                      </div>
                </div>
            </Row>
            </Container>
            <Container className="m-5">
                <Row className="gap-4">
                    {items.map(item => <Product key={item.id} product={item}/>)}
                </Row>
            </Container>
            

        </div>
    )
}

export default Products;