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
import Footer from "../components/footer";
function Products() {
    const [data, setData] = useState([])
    const [info, setInfo] = useState('')
    const [about, setAbout] = useState('name')

    const handleData = async function() {
        const {data} = await axios.get("http://localhost:3000/api/product/")
        console.log(data)
        setData(data)
    }
    const handleSearch = async function(e) {
        e.preventDefault()
        console.log(`${info} ${about}`)
        const search = {
            info: info,
            about: about
          }

        const {data} = await axios.post("http://localhost:3000/api/product/search", search, {responseType: "json"})
        console.log(data)
        if(data.result.length > 0){
            setData(data.result)
        }
        else{
            alert("Product doesn't exist")
        }
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
                            <input type="text" placeholder="Search..." value={info} onChange={(e) => setInfo(e.target.value)}/>
                            <select name="about" id="" value={about} onChange={(e) => setAbout(e.target.value) }>
                                <option value="name">Name</option>
                                <option value="category">Category</option>
                            </select>
                            <button type="submit" onClick={handleSearch}><a href='#'><BsSearch/></a></button>
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
            
            <Footer />
        </div>
    )
}

export default Products;