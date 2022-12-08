import React, {useEffect, useState} from "react";
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
import pr1 from "../assets/img/pr1.jpg"
import pr2 from "../assets/img/pr2.png"
import pr3 from "../assets/img/pr3.jpg"
import pr4 from "../assets/img/pr4.jpg"
import pr5 from "../assets/img/pr5.jpg"
import pr6 from "../assets/img/pr6.png"
import axios from "axios";
function Products() {
    const [data, setData] = useState([])

    const handleData = async function() {
        const {data} = await axios.get("http://localhost:3000/api/product/")
        console.log(data)
        setData(data)
    }
    useEffect(() => {
        handleData();
    }, [])
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
                    {data.map(item => <Product key={item.id} product={item}/>)}
                </Row>
            </Container>
            

        </div>
    )
}

export default Products;