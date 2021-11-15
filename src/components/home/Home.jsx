import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import DisplayBooks from "./DisplayBooks"
import Welcome from "./Welcome"
import CommentArea from "./CommentsArea"

const Home = () => (
  <>
    <Welcome />
    <Container fluid>
      <Row>
        <Col md='3' className='text-center'>
          <CommentArea />
        </Col>
        <Col md='9'>
          <DisplayBooks />
        </Col>
      </Row>
    </Container>
  </>
)

export default Home
