import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-5 fw-bold">About Our Portal</h1>
          <p className="lead text-secondary">Empowering students through technology.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h3>Our Mission</h3>
            <p>
                To deliver elite technical education through radical innovation, empowering students to outpace the evolution of technology.
            </p>
        </Col>
        <Col md={6}>
          <h3>Our Vision</h3>
            <p>
                To engineer the architects of the digital frontier.
            </p>
        </Col>
      </Row>

      <Row className="mt-5 p-4 bg-light rounded shadow-sm">
        <Col>
          <h4 className="text-primary">Department of Information Technology</h4>
          <p className="mb-0">
            This portal is maintained by the SIT department to ensure all students have the tools they need for academic success.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About