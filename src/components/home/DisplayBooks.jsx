import { useState } from "react"
import horrorBooks from "../../data/horror.json"
import historyBooks from "../../data/history.json"
import fantasyBooks from "../../data/fantasy.json"
import romanceBooks from "../../data/romance.json"
import scifiBooks from "../../data/scifi.json"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SingleBook from "./SingleBook"
import FilterOptions from "../FilterOptions"
import PaginationButtons from "../PaginationButtons"

const DisplayBooks = () => {
  const [category, setCategory] = useState("Horror")
  const [searchQuery, setSearchQuery] = useState("")
  const [books, setBooks] = useState(horrorBooks)
  const [bookRange, setBookRange] = useState([0, 24])
  const [bookOrder, setBookOrder] = useState("A-Z")
  const [pageButtons, setPageButtons] = useState(7)
  const [selectedPage, setSelectedPage] = useState(1)

  const pageButtonsArray = []
  for (let i = 0; i < pageButtons; i++) {
    pageButtonsArray.push(i + 1)
  }

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
    setBookRange([0, e.target.value])
    setPageButtons(Math.ceil(Number(books.length) / Number(e.target.value)))
  }

  const handlePageBtnClick = e => {
    const currentAmountOfResults = bookRange[1]
    const pageNo = e.target.innerText
    const startRange = (currentAmountOfResults * (pageNo - 1)) + 1
    const endRange = currentAmountOfResults * pageNo
    setBookRange([startRange, endRange])
    setSelectedPage(e.target.innerText)
  }

  return (
    <Container>
      <FilterOptions
        category={category}
        searchQuery={searchQuery}
        bookRange={bookRange}
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
          .map(({ img, title, price, asin }, index) =>
              (index >= bookRange[0] && index < bookRange[1]) && (
                <SingleBook
                  key={index}
                  bookImg={img}
                  bookTitle={title}
                  bookPrice={price}
                  bookAsin={asin}
                />
              )
          )}
      </Row>
      <Row className="d-flex justify-content-center my-3">
        <PaginationButtons
          amount={pageButtonsArray}
          handlePageBtnClick={handlePageBtnClick}
          selectedPage={selectedPage}
        />
      </Row>
    </Container>
  )
}

export default DisplayBooks
