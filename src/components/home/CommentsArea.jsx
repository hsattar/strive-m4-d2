import { useEffect, useState } from "react"
import Comments from "../Comments"

const CommentArea = ({ bookAsin }) => {

    const [bookComments, setBookComments] = useState([])

    console.log(bookComments)

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

    useEffect(() => {
        fetchData(bookAsin)
    }, [bookAsin])

    return (
        <>
            <h2 className='pt-5 mt-2'>Comments</h2> 
            {bookComments.length > 600 && <p className='mt-4'>Select a Book to see the comments.</p>}
            {bookComments.length < 600 && <Comments bookComments={bookComments} bookAsin={bookAsin}/>}
        </>
    )
}

export default CommentArea