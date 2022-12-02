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

    
        <div class=" about">
            <h1>ABOUT US</h1>
            <div class="para">
            <p> AYTOK'INHTO was created in 2022 for the compliance in WebDev project
             in order for us to pass the subject and proceed in the next semester.</p>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
                 imperdiet lorem. Orci varius natoque penatibus et magnis dis parturient
               montes, nascetur ridiculus mus. Maecenas vel libero orci.</p> 
            </div>

            <Container className="m-5">
                <Row className="gap-4">
                    <Profile name={'Francelle Jurane'} path={france} />
                    <Profile name={'JOHN NIGELS SIPE'} path={nigel}/>
                    <Profile name={'JHOVAN AHIG'} path={van}/>
                    <Profile name={'NICKO BALBOA'} path={nicko}/>
                    <Profile name={'Camra Hashim'} path={camra}/>
                    <Profile name={'AILEEN LIGARDE'} path={aileen}/>
                </Row>
            </Container>



        </div>
        </div>
  )
}

export default About