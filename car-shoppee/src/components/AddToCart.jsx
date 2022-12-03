import React, {useEffect} from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} 
from "mdb-react-ui-kit";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Brand2 from "../assets/img/brand-2.png"
import Product from "../components/Product";
import Cards from '../components/Cards'
import { Link } from 'react-router-dom';
import { removeFromCart,decreaseCart, increaseCart, getTotal } from "../features/cartSlice";
import {useDispatch} from "react-redux"

function AddToCart({product}) {

    const dispatch = useDispatch()
    
 
  return (
        <MDBRow className="align-items-center">
        <MDBCol md="2">
            <Container className="m-5">
                <Row className="gap-4">
                    <Cards image={product.path} />
                </Row>
            </Container>
        </MDBCol>
        <MDBCol md="2" className="d-flex justify-content-center">
            <div>
                <p className="small text-muted mb-4 pb-2">Product Name</p>
                <p className="lead fw-normal mb-0">{product.name}</p>
            </div>
        </MDBCol>
        <MDBCol md="2" className="d-flex justify-content-center">
            <div>
                <p className="small text-muted mb-4 pb-2">Quantity</p>
                <button className='w-50 mx-auto btn btn-light' onClick={() => dispatch(decreaseCart(product))}>-</button>
                <p className="lead fw-normal mb-0 mx-auto ms-2">{product.cartQuantity}</p>
                <button className='w-50 mx-auto btn btn-light' onClick={() => dispatch(increaseCart(product))}>+</button>
            </div>
       
        </MDBCol>
        <MDBCol md="2" className="d-flex justify-content-center">
            <div>
                <p className="small text-muted mb-4 pb-2">Price</p>
                <p className="lead fw-normal mb-0">P{product.price}</p>
            </div>
        </MDBCol>
        <MDBCol md="2" className="d-flex justify-content-center">
            <div>
                <p className="small text-muted mb-4 pb-2">Total</p>
                <p className="lead fw-normal mb-0">P{product.price * product.cartQuantity}</p>
            </div>
        </MDBCol>
        <MDBCol md="2" className="d-flex justify-content-center">
                <button className='btn btn-danger m-4' onClick={() => dispatch(removeFromCart(product))} >Delete</button>
        </MDBCol>
        
    </MDBRow>
  )
}

export default AddToCart