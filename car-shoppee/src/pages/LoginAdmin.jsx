import React from 'react';
import styles from '../assets/css/dashboard.css'
import Logo from '../assets/img/Logo.png'
import Cards from '../components/Cards'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function LoginAdmin() {
  return (
   <div>

    
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={Logo}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are the GROUP-5 Team</h4>
            </div>
            

            <p className='mx-auto'>Please login to your account</p>


            <MDBInput wrapperClass='mb-2' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-2' label='Password' id='form2' type='password'/>


            <div className="text-center mb-5 ">
              <MDBBtn className="mb-5  gradient-custom-2">LOGIN</MDBBtn>
              
            </div>
            

            
              
            </div>

          

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">E-commerce has revolutionized how consumers research and buy products online, but it has particularly proved its worth during the pandemic. Here, sales rocketed to such levels that experts say that for consumers there is now no turning back, whether that be in the grocery sector or automotive aftersales industry.
For those customers looking for discretionary car parts online, then our company offers the perfect solution. Customers can check their purchases, view similar products and get speedy delivery at a good price.
Our company provides auto parts shoppers with a great user experience in the best way in order to meet our customer's satisfaction.
              </p>
            </div>
            

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default LoginAdmin;