import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => (
    <Row className='bg-light'>
        <Container>
            <Col className="text-center mt-3">
                <p>&copy; Strive Books 2021</p>
            </Col>
        </Container>
    </Row>
)

export default Footer