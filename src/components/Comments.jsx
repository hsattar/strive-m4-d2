const Comments = ({ bookComments }) => {   
    return (
        <>
        {bookComments.map(comment => (
             <p>{comment.comment}</p>
        ))}
        </>
    )
}

export default Comments