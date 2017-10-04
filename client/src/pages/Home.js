import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Google from "../components/Google";

const About = () =>
  <div>
    <Google/>
    <Hero backgroundImage="https://ak5.picdn.net/shutterstock/videos/13723595/thumb/4.jpg">
      <h1>SmartGrocer</h1>
      <h2>Meal Planning Done Right</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To SmartGrocer!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          
        </Col>
      </Row>
      <Row>
      <Col size="md-12">
      </Col>
      </Row>
    </Container>
  </div>;

export default About;
