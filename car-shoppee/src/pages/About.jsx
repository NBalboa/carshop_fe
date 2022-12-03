import React from 'react'
import NavBar from '../components/NavBar'
import nicko from '../assets/img/nicko.jpg'
import van from '../assets/img/van.jpg'
import nigel from '../assets/img/nigel.jpg'
import france from '../assets/img/france.jpg'
import aileen from '../assets/img/aileen.jpg'
import camra from '../assets/img/camra.jpg'
import "../assets/css/about.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Profile from '../components/Profile'

function About() {
  return (
    <div>
      <NavBar/>
      <div className=" about">
          <h1>ABOUT US</h1>
          <div className="para">
              <p> AYTOK'INHTO was created in 2022 for the compliance in WebDev project
              in order for us to pass the subject and proceed in the next semester.</p>
              <p>E-commerce has revolutionized how consumers research and buy products online, but it has particularly proved its worth during the pandemic. Here, sales rocketed to such levels that experts say that for consumers there is now no turning back, whether that be in the grocery sector or automotive aftersales industry.
              For those customers looking for discretionary car parts online, then our company offers the perfect solution. Customers can check their purchases, view similar products and get speedy delivery at a good price.
              Our company provides auto parts shoppers with a great user experience in the best way in order to meet our customer's satisfaction.
              .
              </p> 
          </div>
            <Container className="m-5">
                <Row className="gap-4">
                    <Profile name={'France Jell Jurane'} path={france} />
                    <Profile name={'JOHN NIGELS SIPE'} path={nigel}/>
                    <Profile name={'JHOVAN AHIG'} path={van}/>
                    <Profile name={'NICKO BALBOA'} path={nicko}/>
                    <Profile name={'CAMRA HASHIM'} path={camra}/>
                    <Profile name={'AILEEN LIGARDE'} path={aileen}/>
                </Row>
            </Container>
          </div>
        </div>
  )
}

export default About