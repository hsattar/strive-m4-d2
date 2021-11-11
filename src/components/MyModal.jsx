import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const MyModal = ({ handleCloseModal, showModal, selectedBook, bookComments }) => {
  
    return (
      <>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBook}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {
                  bookComments.map(({comment, _id: id}) => (
                      <p key={id}>{comment}</p>
                  ))
              }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>Add Comment</Button>
            <Button variant="danger" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  export default MyModal