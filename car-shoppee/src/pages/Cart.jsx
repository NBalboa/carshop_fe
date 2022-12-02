import React from 'react'
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


function Cart() {
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
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                  <Container className="m-5">
                <Row className="gap-4">
                    <Cards image={Brand2} />
                    </Row>
                    </Container>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Product Name</p>
                      <p className="lead fw-normal mb-0">Item 1</p>
                    </div>
                  </MDBCol>
                  {/* <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Color</p>
                      <p className="lead fw-normal mb-0">
                        <MDBIcon
                          fas
                          icon="circle me-2"
                          style={{ color: "#fdd8d2" }}
                        />
                        pink rose
                      </p>
                    </div>
                  </MDBCol> */}
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$799</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
              <MDBBtn color="light" size="lg" className="me-2">
                Continue shopping
              </MDBBtn>
              <MDBBtn size="lg">Add to cart</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
       
    </div>
  );
}

export default Cart