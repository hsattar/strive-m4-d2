import horrorBooks from '../data/horror.json'
import Container from 'react-bootstrap/Container'
import Book from './Book'
import Row from 'react-bootstrap/Row'

const LatestBooks = () => (
    <Container>
        <h2>Latest Books</h2>
        <Row>
            {
                horrorBooks.map(({asin, img}) => 
                    <Book key={asin} bookImg={img} />
                )
            }
        </Row>
    </Container>
)

export default LatestBooks