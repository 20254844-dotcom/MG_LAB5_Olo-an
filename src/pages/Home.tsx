import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-light py-5 mb-4 rounded-3">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold text-dark">Welcome to the Student Portal</h1>
            <p className="fs-5 text-muted">
              Access your academic records, university services, and department 
              announcements all in one place.
            </p>
            <Link to="/Services">
              <Button variant="primary" size="lg" className="mt-3 px-4 shadow">
                Explore Services
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home