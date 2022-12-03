import NavBar from "../components/NavBar";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/productdetails.css";
import img from "../assets/img/brand-1.png"
import { AiFillStar } from "react-icons/ai";

function ProductDetails() {
  return (
    <div>

    <NavBar />
    
    <div className="details"><section>
      <Container>
        <Row>
          

          <Col lg="6" md="6">
            <div className="product__main-img">
              <img src= {img} alt="" className="w-100" />
              <h1>Rate:<a href="#"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></a></h1>
            </div>
            
          </Col>

          <Col lg="6" md="6">
            <div className="single__product-content">
              <h2 className="product__title mb-3">TITLE NI</h2>
              <p className="product__price">
               <span> Product description</span>
              </p>
              <p className="product__price">
                Price: <span>₱ 999</span>
              </p>
              <p className="category mb-2">
                Available: <span>999</span>
              </p>
              <p className="category mb-2 " >
                 Quantity:
              </p>
              <div className="input number">
               <input className="quantity fw-bold text-black" min={0}  defaultValue={1} type="number"  />
               </div>
              <button className="addTOCart__btn">
                Add to Cart
              </button>
            </div>
          </Col>

          <Col lg="12">
            <div className="tabs d-flex align-items-center gap-5 py-3">
            </div>
              <div className="tab__form mb-3">

                  <div className="form__group">
                    <textarea
                      rows={5}
                      type="text"
                      placeholder="Write your review"
                    />
                  </div>

                  <button type="submit" className="addTOCart__btn">
                    Submit
                  </button>
            </div>
            </Col>
            </Row>
            </Container>
            </section>
            </div>
            </div>
  )
}

export default ProductDetails