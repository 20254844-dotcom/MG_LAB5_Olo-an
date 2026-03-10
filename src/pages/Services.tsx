import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
  const portalServices = [
    {title: "Enrollment", text: "Register for your subjects for the upcoming semester." },
    {title: "Grades", text: "View your official transcript and semester evaluations." },
    {title: "Library", text: "Search the digital catalog and reserve study rooms." },
    {title: "Accounts", text: "Manage your university email and Wi-Fi credentials." }
    
  ]

  return (
    <Container>
      <h2 className="mb-4 border-bottom pb-2">Our Services</h2>
      <Row>
        {portalServices.map((service, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card className="h-100 shadow-sm border-0 bg-white">
              <Card.Body>
                <Card.Title className="text-primary fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-secondary small">{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Services