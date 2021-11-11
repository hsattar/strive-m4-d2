import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

const MyModal = ({ handleCloseModal, showModal, selectedBook }) => {
  
    return (
      <>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBook}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>Add Comment</Button>
            <Button variant="danger" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  export default MyModal