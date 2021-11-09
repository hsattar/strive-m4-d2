import { Row, FormControl } from "react-bootstrap"

const FilterOptions = ({ category, searchQuery, amountOfBooks, handleCategoryChange, handleSortOrder, handleSearch, handleResultsPerPage}) => (
    <>
        <Row>
            <FormControl className="mb-3 mx-3"
            placeholder="Search A Book..."
            onKeyUp={handleSearch}
            />
        </Row>
        <Row className="justify-content-between mb-3">
            {
                searchQuery ? <h2 className="pl-3">{amountOfBooks} Books For {searchQuery}</h2>
                : <h2 className="pl-3">{amountOfBooks} {category} Books</h2> 
            }
            <div>
                <select onChange={handleCategoryChange} name="category" id="category" className="mr-3">
                    <option value="horror">Horror</option>
                    <option value="history">History</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Sci-Fi</option>
                </select>
                <select onChange={handleSortOrder} name="sort" id="sort" className="mr-3">
                    <option value="a-z">Title (A-Z)</option>
                    <option value="z-a">Title (Z-A)</option>
                    <option value="low-high">Price (Low-High)</option>
                    <option value="high-low">Price (High-Low)</option>
                </select>
                <select onChange={handleResultsPerPage} name="resultsAmount" id="resultsAmount" className="mr-3">
                    <option value="24">24</option>
                    <option value="48">48</option>
                    <option value="96">96</option>
                    <option value="150">All</option>
                </select>
            </div>
        </Row>
    </>
)

export default FilterOptions

