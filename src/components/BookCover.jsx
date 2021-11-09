import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const BookCover = ({bookImg}) => (
    <Col xs='12' sm='6' md='4' lg='3' className="mb-2">
        <Card>
            <Card.Img className="book-cover" variant="top" src={bookImg} />
        </Card>
    </Col>
)


export default BookCover