import { useState } from 'react'
import horrorBooks from '../data/horror.json'
import historyBooks from '../data/history.json'
import fantasyBooks from '../data/fantasy.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BookCover from './BookCover'


const LatestBooks = () => {
    
    const [category, setCategory] = useState('Horror')
    const [books, setBooks] = useState(horrorBooks)

    const handleChange = (e) => {
        setCategory(e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1))
        switch (e.target.value) {
            case 'horror':
                setBooks(horrorBooks)
            break;
            case 'history':
                setBooks(historyBooks)
            break;
            case 'fantasy':
                setBooks(fantasyBooks)
            break;
            case 'romance':
                setBooks(romanceBooks)
            break;
            case 'scifi':
                setBooks(scifiBooks)
            break;
            default:
                alert('Looks Like Something went wrong')
        }
    }

    return (
        <Container>
            <Row className="justify-content-between mb-3">
                <h2 className="pl-3">Latest {category} Books</h2>
                <select onChange={handleChange} name="category" id="category" className="mr-3">
                    <option value="horror">Horror</option>
                    <option value="history">History</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Sci-Fi</option>
                </select>
            </Row>
            <Row>
                {
                    books.map(({asin, img}) => 
                        <BookCover key={asin} bookImg={img} />
                    )
                }
            </Row>
        </Container>
    )
}

export default LatestBooks