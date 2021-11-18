import { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import DisplayBooks from "../components/home/DisplayBooks"
import Welcome from "../components/home/Welcome"
import CommentArea from "../components/home/CommentsArea"

const Home = () => {
 
  const [selectedBookAsin, setSelectedBookAsin] = useState('')

  const randomFunc2 = (e) => {
    setSelectedBookAsin(e)
  }
 
  return (

      <>
        <Welcome />
        <Container fluid>
          <Row>
            <Col md='3' className='text-center'>
              <CommentArea
                className='sidebar'
                bookAsin={selectedBookAsin}
              />
            </Col>
            <Col md='9'>
              <DisplayBooks 
                handleBookAsinClick={randomFunc2}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Home
