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
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
              <p>
                <Link to='/productdetails/9' className='text-reset'>
                    Steering Wheel
                </Link>
              </p>
              <p>
                <Link to='/productdetails/10' className='text-reset'>
                  Handle
                </Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
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