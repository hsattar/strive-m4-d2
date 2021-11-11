import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import {useState} from 'react'
import MyModal from '../MyModal'

const SingleBook = ({ bookImg, bookTitle, bookPrice, bookAsin }) => {

  const [selectedBook, setSelectedBook] = useState('')
  const [showModal, setShowModal] = useState(false)
  
  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const fetchData = async () => {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      headers: {
        "Authorization": "abc"
      }
    })
  }

  return (
    <>
      <Col xs="12" sm="6" md="4" lg="3" className="mb-2">
        <Card onClick={() => {
          setShowModal(true)
          setSelectedBook(bookTitle)
          }}>
          <Card.Img className="book-cover" variant="top" src={bookImg} />
          <Card.Body>
            <Card.Text>{bookTitle}</Card.Text>
            <Card.Text>£{bookPrice}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <MyModal
        handleShowModal={handleShowModal}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        selectedBook={selectedBook}
      />

    </>
  )
}

export default SingleBook
