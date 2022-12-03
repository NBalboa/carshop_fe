import React, {useEffect} from 'react'
import NavBar from '../components/NavBar'
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
import AddToCart from '../components/AddToCart';
import {useSelector, useDispatch} from 'react-redux';
import { getTotal } from "../features/cartSlice";


function Cart() {
  const cart = useSelector((item) => item.user)
  const totalPrice = cart.cartItems.reduce((acc, item) => acc + item.cartQuantity * item.price, 0).toFixed(2);
  const totalQuantity = cart.cartItems.reduce((acc, item) => acc + item.cartQuantity + 0, 0);
  console.log(totalQuantity);
  return (
    <div>
        <NavBar/>
        <section className="vh-100" style={{ backgroundColor: "#aaa" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Shopping Cart </span>
            </p>
            <MDBCard className="mb-4">
              <MDBCardBody className="p-4">
                {cart.cartItems.length === 0 ? (<h1>Empty Carty</h1>): (
                  cart.cartItems.map((item) => <AddToCart key={item.id} product={item}/>)
                )} 
              </MDBCardBody>
            </MDBCard>
            
            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">P{totalPrice}</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
              <MDBBtn color="light" size="lg" className="me-2">
                Continue shopping
              </MDBBtn>
              <MDBBtn size="lg"><Link className='text-decoration-none text-dark' to='/checkout'>Check Out</Link></MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  );
}

export default Cart