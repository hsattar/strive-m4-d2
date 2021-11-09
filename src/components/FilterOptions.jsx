import { Row, FormControl } from "react-bootstrap"

const FilterOptions = ({ category, amountOfBooks, handleCategoryChange, handleSortOrder, handleSearch, handleResultsPerPage}) => (
    <>
        <Row>
            <FormControl className="mb-3 mx-3"
            placeholder="Search A Book..."
            onChange={handleSearch}
            />
        </Row>
        <Row className="justify-content-between mb-3">
            <h2 className="pl-3">{amountOfBooks} Latest {category} Books</h2>
            <div>
                <select onChange={handleCategoryChange} name="category" id="category" className="mr-3">
                    <option value="horror">Horror</option>
                    <option value="history">History</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Sci-Fi</option>
                </select>
                <select onChange={handleSortOrder} name="sort" id="sort" className="mr-3">
                    <option value="a-z">Sort (A-Z)</option>
                    <option value="z-a">Sort (Z-A)</option>
                    <option value="low-high">Sort (Price Low-High)</option>
                    <option value="high-low">Sort (Price High-Low)</option>
                </select>
                <select onChange={handleResultsPerPage} name="resultsAmount" id="resultsAmount" className="mr-3">
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
        </Row>
    </>
)

export default FilterOptions

