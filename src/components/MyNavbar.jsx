import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const MyNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#">Strive Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#" className="active">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default MyNavbar