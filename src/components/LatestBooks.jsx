import { useState } from 'react'
import horrorBooks from '../data/horror.json'
import historyBooks from '../data/history.json'
import fantasyBooks from '../data/fantasy.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import BookCover from './BookCover'


const LatestBooks = () => {
    
    const [category, setCategory] = useState('Horror')
    const [books, setBooks] = useState(horrorBooks)
    const [booksOrder, setBooksOrder] = useState(horrorBooks)

    const handleCategoryChange = (e) => {
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

    const handleSortOrder = () => {
        console.log('need to complete this')
    }

    return (
        <Container>
            <Row className="justify-content-between mb-3">
                <h2 className="pl-3">Latest {category} Books</h2>
                <div>
                    <select onChange={handleCategoryChange} name="category" id="category" className="mr-3">
                        <option value="horror">Horror</option>
                        <option value="history">History</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="romance">Romance</option>
                        <option value="scifi">Sci-Fi</option>
                    </select>
                    <select onChange={handleSortOrder} name="category" id="category" className="mr-3">
                        <option value="horror">Sort (A-Z)</option>
                        <option value="history">Sort (Z-A)</option>
                        <option value="fantasy">Sort (Price Low-High)</option>
                        <option value="romance">Sort (Price High-Low)</option>
                    </select>
                </div>
            </Row>
            <Row>
                <InputGroup className="mb-3 mx-3">
                    {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                    <FormControl
                    placeholder="Search A Book..."
                    />
                </InputGroup>
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