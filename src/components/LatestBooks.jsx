import { useState } from 'react'
import horrorBooks from '../data/horror.json'
import historyBooks from '../data/history.json'
import fantasyBooks from '../data/fantasy.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'
import { Container, Row } from 'react-bootstrap'
import BookCover from './BookCover'
import FilterOptions from './FilterOptions'


const LatestBooks = () => {
    
    const [category, setCategory] = useState('Horror')
    const [searchQuery, setSearchQuery] = useState(null)
    const [books, setBooks] = useState(horrorBooks)
    const [amountOfBooks, setAmountOfBooks] = useState(24)
    // const [booksOrder, setBooksOrder] = useState(horrorBooks)

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

    const handleSortOrder = e => {
        switch (e.target.value) {
            case 'a-z':
                const azBookTitles = []
                books.forEach(book => azBookTitles.push(book.title))
                azBookTitles.sort()
                const azNewBookOrder = []
                azBookTitles.forEach(bookTitle => azNewBookOrder.push(books.find(({title}) => title === bookTitle)))
                setBooks(azNewBookOrder)
            break;
            case 'z-a':
                const zaBookTitles = []
                books.forEach(book => zaBookTitles.push(book.title))
                zaBookTitles.sort()
                zaBookTitles.reverse()
                const zaNewBookOrder = []
                zaBookTitles.forEach(bookTitle => zaNewBookOrder.push(books.find(({title}) => title === bookTitle)))
                setBooks(zaNewBookOrder)
            break;
            case 'low-high':
                const lhBookPrices = []
                books.forEach(book => lhBookPrices.push(book.price))
                lhBookPrices.sort()
                console.log(lhBookPrices)
                const lhNewBookOrder = []
                lhBookPrices.forEach(bookPrice => lhNewBookOrder.push(books.find(({price}) => price === bookPrice)))
                console.log(lhNewBookOrder)
                setBooks(lhNewBookOrder)
            break;
            case 'high-low':
                const hlBookPrices = []
                books.forEach(book => hlBookPrices.push(book.price))
                hlBookPrices.sort()
                hlBookPrices.reverse()
                console.log(hlBookPrices)
                const hlNewBookOrder = []
                hlBookPrices.forEach(bookPrice => hlNewBookOrder.push(books.find(({price}) => price === bookPrice)))
                console.log(hlNewBookOrder)
                setBooks(hlNewBookOrder)
                console.log(hlNewBookOrder)
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
                    books.map(({img}, index) => 
                        index < amountOfBooks && <BookCover key={index} bookImg={img} />
                    )
                }
            </Row>
        </Container>
    )
}

export default LatestBooks