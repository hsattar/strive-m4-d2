import Button from 'react-bootstrap/Button'

const Comment = ({comment, rate, id}) => {

    const handledelete = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                ssmethod: 'DELETE',
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) alert('deleted comment')
        } catch (error) {
            console.error(error)
        }
    }

    
    return (
        <div className="d-flex justify-content-between my-2"> 
            <p>{comment} - Rating {rate}/5</p>
            <Button variant="outline-danger" onClick={handledelete}>X</Button>
        </div>
    )
}

export default Comment