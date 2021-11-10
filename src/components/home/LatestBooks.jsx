import { useState } from 'react'
import horrorBooks from '../../data/horror.json'
import historyBooks from '../../data/history.json'
import fantasyBooks from '../../data/fantasy.json'
import romanceBooks from '../../data/romance.json'
import scifiBooks from '../../data/scifi.json'
import { Container, Row } from 'react-bootstrap'
import BookCover from './BookCover'
import FilterOptions from '../FilterOptions'


const LatestBooks = () => {
    
    const [category, setCategory] = useState('Horror')
    const [searchQuery, setSearchQuery] = useState('')
    const [books, setBooks] = useState(horrorBooks)
    const [amountOfBooks, setAmountOfBooks] = useState(24)
    const [bookOrder, setBookOrder] = useState('a-z')

    const handleCategoryChange = e => {
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

    // TODO: TURN THIS CODE INTO A FUNCTION WITH DIFFERENT PARAMETERS INCLUDING ONE FOR REVERSE, SET DEFAULT TO FALSE 

    const sortBookOrderLetters = (property, reverse = false) => {
        const bookProperty = []
        books.forEach(book => bookProperty.push(book[property]))
        bookProperty.sort()
        if (reverse) bookProperty.reverse()
        const newBookOrder = []
        bookProperty.forEach(bookValue => newBookOrder.push(books.find(book => book[property] === bookValue)))
        return newBookOrder
    }

    const sortBookOrderNumbers = (property, reverse = false) => {
        const bookProperty = []
        books.forEach(book => bookProperty.push(book[property]))
        bookProperty.sort((a, b) => a - b)
        if (reverse) bookProperty.reverse()
        const newBookOrder = []
        bookProperty.forEach(bookValue => newBookOrder.push(books.find(book => book[property] === bookValue)))
        return newBookOrder
    }

    const handleSortOrder = e => {
        setBookOrder(e.target.value)
        switch (e.target.value) {
            case 'a-z':
                setBooks(sortBookOrderLetters('title'))
            break;
            case 'z-a':
                setBooks(sortBookOrderLetters('title', true))
            break;
            case 'low-high':
                setBooks(sortBookOrderNumbers('price'))
            break;
            case 'high-low':
                setBooks(sortBookOrderNumbers('price', true))

            break;
            default: 
                alert('Looks like something went wrong')
        }
    }

    const handleSearch = e => {
        if (e.target.value) {
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setBooks(filteredBooks)
            setAmountOfBooks(filteredBooks.length)
            setSearchQuery(e.target.value)
        } else {
            setSearchQuery(null)
        }
    }

    const handleResultsPerPage = e => {
        setAmountOfBooks(e.target.value)
    }

    return (
        <Container>
            <FilterOptions
            category={category}
            searchQuery={searchQuery}
            amountOfBooks={amountOfBooks} 
            handleCategoryChange={handleCategoryChange} 
            handleSortOrder={handleSortOrder} 
            handleSearch={handleSearch}
            handleResultsPerPage={handleResultsPerPage}
            />
            <Row className="justify-content-center">
                {
                    books.map(({img, title, price}, index) => 
                        index < amountOfBooks && <BookCover key={index} bookImg={img} bookTitle={title} bookPrice={price}/>
                    )
                }
            </Row>
        </Container>
    )
}

export default LatestBooks