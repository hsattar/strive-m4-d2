import { Row, FormControl } from "react-bootstrap"

const FilterOptions = ({ category, handleCategoryChange, handleSortOrder, handleSearch}) => (
    <>
        <Row>
            <FormControl className="mb-3 mx-3"
            placeholder="Search A Book..."
            onChange={handleSearch}
            />
        </Row>
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
    </>
)

export default FilterOptions

