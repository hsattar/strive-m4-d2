import { useState } from "react"
import horrorBooks from "../../data/horror.json"
import historyBooks from "../../data/history.json"
import fantasyBooks from "../../data/fantasy.json"
import romanceBooks from "../../data/romance.json"
import scifiBooks from "../../data/scifi.json"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import BookCover from "./BookCover"
import FilterOptions from "../FilterOptions"
import PaginationButtons from "../PaginationButtons"

const DisplayBooks = () => {
  const [category, setCategory] = useState("Horror")
  const [searchQuery, setSearchQuery] = useState("")
  const [books, setBooks] = useState(horrorBooks)
  const [amountOfBooks, setAmountOfBooks] = useState([0, 24])
  const [bookOrder, setBookOrder] = useState("A-Z")
  const [pageButtons, setPageButtons] = useState(7)

  const handleCategoryChange = e => {
    setCategory(
      e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1)
    )
    switch (e.target.value) {
      case "Horror":
        setBooks(horrorBooks)
        break
      case "History":
        setBooks(historyBooks)
        break
      case "Fantasy":
        setBooks(fantasyBooks)
        break
      case "Romance":
        setBooks(romanceBooks)
        break
      case "Scifi":
        setBooks(scifiBooks)
        break
      default:
        alert("Looks Like Something went wrong")
    }
  }

  const sortBookOrderLetters = (property, reverse = false) => {
    const bookProperty = []
    books.forEach(book => bookProperty.push(book[property]))
    bookProperty.sort()
    if (reverse) bookProperty.reverse()
    const newBookOrder = []
    bookProperty.forEach(bookValue =>
      newBookOrder.push(books.find(book => book[property] === bookValue))
    )
    return newBookOrder
  }

  const sortBookOrderNumbers = (property, reverse = false) => {
    const bookProperty = []
    books.forEach(book => bookProperty.push(book[property]))
    bookProperty.sort((a, b) => a - b)
    if (reverse) bookProperty.reverse()
    const newBookOrder = []
    bookProperty.forEach(bookValue =>
      newBookOrder.push(books.find(book => book[property] === bookValue))
    )
    return newBookOrder
  }

  const handleSortOrder = e => {
    setBookOrder(e.target.value)
    switch (e.target.value) {
      case "A-Z":
        setBooks(sortBookOrderLetters("title"))
        break
      case "Z-A":
        setBooks(sortBookOrderLetters("title", true))
        break
      case "Low-High":
        setBooks(sortBookOrderNumbers("price"))
        break
      case "High-Low":
        setBooks(sortBookOrderNumbers("price", true))

        break
      default:
        alert("Looks like something went wrong")
    }
  }

  const handleSearch = e => {
    setSearchQuery(e.target.value)
  }

  const handleResultsPerPage = e => {
    setAmountOfBooks([0, e.target.value])
    setPageButtons(Number(books.length) / Number(e.target.value))
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
        {books
          .filter(book =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(
            ({ img, title, price, asin }, index) =>
              index < amountOfBooks[1] && (
                <BookCover
                  key={asin}
                  bookImg={img}
                  bookTitle={title}
                  bookPrice={price}
                />
              )
          )}
      </Row>
      <Row className="d-flex justify-content-center my-3">
        <PaginationButtons amount={pageButtons} />
      </Row>
    </Container>
  )
}

export default DisplayBooks
