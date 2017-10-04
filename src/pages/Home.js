import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>

   <div>
      <Container style={{ minHeight: "80%" }}>
       <Hero backgroundImage="https://ak5.picdn.net/shutterstock/videos/13723595/thumb/4.jpg">
      <h1>SmartGrocer</h1>
      <h2>Meal Planning Done Right</h2>
    </Hero>
        <h1 className="text-center">Welcome to SmartGrocer!</h1>
        <Row>
        <Col size="md-12">
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p className="text-center">
            LLL
          </p>
          <p className="text-center">
           aaaaa
          </p>
          <p className="text-center">
            Modal
          </p>
        </Col>
      </Row>
      <Row>
      <Col size="md-12">
      </Col>
      </Row>
      </Container>
  </div>
 
export default About;

   