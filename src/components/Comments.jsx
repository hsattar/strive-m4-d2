import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Comments = ({ bookComments, bookAsin }) => {
    
    const [comments, setComments] = useState(null)
    const [addComment, setAddComment] = useState(false)
    const [newComment, setNewComment] = useState({
        comment: '',
        rate: '',
        elementId: ''
    })


    const handlePostComment = async e => {
        e.preventDefault()

        try {
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
        }
    } catch (error) {
        console.error(error)
        }

    }

    const fetchComments = async (book) => {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book}`, {
            headers: {
                "Authorization": process.env.REACT_APP_TOKEN
            }
            })
            if (!response.ok) throw new Error('Fetch Failed') 
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchComments(bookAsin)
    }, [newComment])

    return (
        <>
        {bookComments.length === 0 && <p className='mt-4'>There are no comments for this book.</p>}
        {bookComments && bookComments.map(({comment, _id: id}) => (
             <p key={id}>{comment}</p>
        ))}

        {addComment ?  
        <Form onSubmit={handlePostComment}>

            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea"
                    rows={3}
                    placeholder="Enter Comment" 
                    required
                    value={newComment.comment}
                    onChange={e => setNewComment({...newComment, elementId: bookAsin, comment: e.target.value})}   
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
        : <Button className='ml-3' variant="success" onClick={() => setAddComment(true)}>Add Comment</Button>
        }
        </>
    )
}

export default Comments