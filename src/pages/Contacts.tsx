import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

const Contact: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">Have questions? The IT Department is here to help.</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={5}>
          <Card className="border-0 bg-primary text-white p-3 shadow-sm">
            <Card.Body>
              <h4>Vespera Heights University</h4>
              <p className="mb-1">School of Information Technology</p>
              <p className="small">General Luna Rd, Baguio, 2600 Benguet</p>
              <hr />
              <p className="mb-1"><strong>Email:</strong> sit@uvespera.edu</p>
              <p><strong>Phone:</strong> (067) 420-1738</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@student.uvespera.edu" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="How can we help you?" />
            </Form.Group>

            <Button variant="dark" type="submit" className="px-4">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact