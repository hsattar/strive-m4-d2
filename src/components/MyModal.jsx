import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const MyModal = ({ handleCloseModal, showModal, selectedBookTitle, selectedBookAsin, bookComments }) =>  {

    const [addComment, setAddComment] = useState(false)
    const [newComment, setNewComment] = useState({
        comment: '',
        rate: '',
        elementId: 'selectedBookAsin'
    })


    const handlePostComment = e => {
        e.preventDefault()
        postComment()
    }

    const postComment = async () => {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json",
                "Authorization": process.env.REACT_APP_TOKEN
            }
        })
        if (response.ok) {
            alert('Comment Posted Successfully')
            setAddComment(false)
            handleCloseModal()
        }
    }

    
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>{selectedBookTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                     !addComment ? (
                         bookComments.length > 0 ? bookComments.map(({comment, rate, _id: id}) => (
                        <p key={id}>{comment} - Rating {rate}/5</p>
                    )) 
                    : ( <p>No comments to show for this book</p> )
                    ) : (
                        <Form onSubmit={handlePostComment}>

                            {/* <Form.Group>
                                <Form.Label>Book Asin</Form.Label>
                                <Form.Control
                                    type="hidden"
                                    value={selectedBookAsin}
                                    required
                                    readOnly
                                />
                            </Form.Group> */}


                            <Form.Group>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea"
                                    rows={3}
                                    placeholder="Enter Comment" 
                                    required
                                    value={newComment.comment}
                                    onChange={e => setNewComment({...newComment, elementId: selectedBookAsin, comment: e.target.value})}   
                                />
                            </Form.Group>

                        
                            <Form.Group>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="1-5"
                                    required
                                    min="1"
                                    max="5"
                                    value={newComment.rate}
                                    onChange={e => setNewComment({...newComment, rate: e.target.value})}
                                />
                            </Form.Group>

                            <Button variant="success" type="submit">Post</Button>
                            <Button className='ml-3' variant="warning" type="button" onClick={() => setAddComment(false)}>Cancel Comment</Button>
                        </Form>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
            {!addComment && <Button variant="success" onClick={() => setAddComment(true)}>Add Comment</Button>}
            <Button variant="danger" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal