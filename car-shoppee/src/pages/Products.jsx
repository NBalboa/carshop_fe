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
    return (
        <div>
            <NavBar/>
            <Container className="m-5 col-8">
            <Row className="gap-4">
            <div class="modal-body">
                    <div class="search">
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
                    <Product image={Brand1} />
                    <Product image={Brand1} />
                    <Product image={Brand1} />
                    <Product image={Brand1} />
                    <Product image={Brand1} />
                    <Product image={Brand1} />
                </Row>
            </Container>
            

        </div>
    )
}

export default Products;