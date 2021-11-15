import { useState } from "react"
import Comments from "../Comments"

const CommentArea = () => {

    const [bookComments, setBookComments] = useState([])

    const fetchData = async (book) => {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book}`, {
            headers: {
                "Authorization": process.env.REACT_APP_TOKEN
            }
            })
            if (!response.ok) throw new Error('Fetch Failed') 
            const data = await response.json()
            setBookComments(data)
        } catch (error) {
            console.error(error)
        }
      }

    // fetchData(bookAsin)

    return (
        <>
            <h2 className='pt-5 mt-2'>Comments</h2> 
            <p className='mt-4'>Select a Book to see the comments.</p>
            <Comments />
        </>
    )
}

export default CommentArea