import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub} from "react-icons/bs";
import { AiOutlineTwitter,   AiOutlineGoogle , AiOutlineLinkedin} from "react-icons/ai";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export default function footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
            <Row>
                <Col>
                    <a href='#'><BsFacebook/></a>
                </Col>
                <Col>
                    <a href='#'><AiOutlineTwitter/></a>
                </Col>
                <Col>
                    <a href='#'><AiOutlineGoogle/></a>
                </Col>
                <Col>
                    <a href='#'><BsInstagram/></a>
                </Col>
                <Col>
                    <a href='#'><AiOutlineLinkedin/></a>
                </Col>
                <Col>
                    <a href='#'><BsGithub/></a>
                </Col>
                
            </Row>
        </div>
    </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                AYTOK' INHTO COMPANY
              </h6>
              <p>
              E-commerce has revolutionized how consumers research and buy products online, but it has particularly proved its worth during the pandemic. Here, sales rocketed to such levels that experts say that for consumers there is now no turning back, whether that be in the grocery sector or automotive aftersales industry.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <Link to='/productdetails/9' className='text-reset'>
                  Mirror
                </Link>
              </p>
              <p>
                <Link to='/productdetails/10' className='text-reset'>
                    Steering Wheel
                </Link>
              </p>
              <p>
                <Link to='/productdetails/11' className='text-reset'>
                  Handle
                </Link>
              </p>
              <p>
                <Link to='/productdetails/12' className='text-reset'>
                  Light
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link  to='#' className='text-reset'>
                  Home
                </Link>
              </p>
              <p>
                <Link to='#' className='text-reset'>
                  Login
                </Link>
              </p>
              <p>
                <Link to='#' className='text-reset'>
                  Products
                </Link>
              </p>
              <p>
                <Link to='#' className='text-reset'>
                  About
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Zamboanga Del Sur, Pagadian City, Bulatok, Philippines
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                AYTOKINHTO@GMAIL.COM
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 950 0117 765
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 966 7708 659
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='#'>
          AYTOK'INHTO.COM
        </a>
      </div>
    </MDBFooter>
  );
}