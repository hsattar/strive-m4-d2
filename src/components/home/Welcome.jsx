import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

const Welcome = () => (
    <Jumbotron>
        <Container className="text-center">
            <h1>Welcome To Strive Books</h1>
            <h5 className="mt-3 font-weight-normal">We have the biggest book collection in the world!</h5>
        </Container>
    </Jumbotron>
)

export default Welcome