import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"

const BookCover = ({ bookImg, bookTitle, bookPrice }) => (
  <Col xs="12" sm="6" md="4" lg="3" className="mb-2">
    <Card>
      <Card.Img className="book-cover" variant="top" src={bookImg} />
      <Card.Body>
        <Card.Text>{bookTitle}</Card.Text>
        <Card.Text>£{bookPrice}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

export default BookCover
