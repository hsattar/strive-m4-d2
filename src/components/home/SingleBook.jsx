import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { useState } from 'react'
import MyModal from '../MyModal'

const SingleBook = ({ bookImg, bookTitle, bookPrice, bookAsin }) => {

  const [selectedBookTitle, setSelectedBookTitle] = useState('')
  const [selectedBookAsin, setSelectedBookAsin] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [bookComments, setBookComments] = useState([])
  
  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const fetchData = async (book) => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book}`, {
      headers: {
        "Authorization": process.env.REACT_APP_TOKEN
      }
    })
    const data = await response.json()
    setBookComments(data)
  }

  return (
    <>
      <Col xs="12" sm="6" md="4" lg="3" className="mb-2">
        <Card onClick={() => {
          setShowModal(true)
          setSelectedBookTitle(bookTitle)
          setSelectedBookAsin(bookAsin)
          fetchData(bookAsin)
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
        selectedBookTitle={selectedBookTitle}
        selectedBookAsin={selectedBookAsin}
        bookComments={bookComments}
      />

    </>
  )
}

export default SingleBook
