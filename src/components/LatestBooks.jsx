import { useState } from 'react'
import horrorBooks from '../data/horror.json'
import historyBooks from '../data/history.json'
import fantasyBooks from '../data/fantasy.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BookCover from './BookCover'
import FilterOptions from './FilterOptions'

// TODO: RESULTS PER PAGE FILTER / MULTIPLE PAGES


const LatestBooks = () => {
    
    const [category, setCategory] = useState('Horror')
    const [books, setBooks] = useState(horrorBooks)
    // const [booksOrder, setBooksOrder] = useState(horrorBooks)

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

    const handleSearch = e => {
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setBooks(filteredBooks)
    }

    return (
        <Container>
            <FilterOptions
            category={category} 
            handleCategoryChange={handleCategoryChange} 
            handleSortOrder={handleSortOrder} 
            handleSearch={handleSearch}
            />
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