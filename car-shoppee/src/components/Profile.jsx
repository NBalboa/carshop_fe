import React from 'react'
import {BsGithub,BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function Profile({name, path}) {
  return (
        <Col>
            <Card.Img variant="top" src={path} className='img-fluid rounded-circle' style={{height:150}}/>
            <Card.Body>
                <Card.Title className="fs-4">{name}</Card.Title>
                <Card.Text className="text-break fs-6">
                    FRONTEND DEVELOPER
                </Card.Text>
                <Row>
                    <Col>
                        <a href='#'><BsFacebook/></a>
                    </Col>
                    <Col>
                        <a href='#'><SiGmail/></a>
                    </Col>
                    <Col>
                        <a href='#'><BsGithub/></a>
                    </Col>
                </Row>
            </Card.Body>
        </Col>
  )
}

export default Profile