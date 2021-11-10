import { Row, FormControl } from "react-bootstrap"
import SelectFormInput from "./SelectFormInput"

const categories = ['Horror', 'History', 'Fantasy', 'Romance', 'Scifi']
const sortOrder = ['A-Z', 'Z-A', 'Low-High', 'High-Low']
const resultsAmount = ['24', '48', '96', 'All']

const FilterOptions = ({ category, searchQuery, amountOfBooks, handleCategoryChange, handleSortOrder, handleSearch, handleResultsPerPage}) => (
    <>
        <Row>
            <FormControl className="mb-3 mx-3"
            placeholder="Search A Book..."
            onChange={handleSearch}
            value={searchQuery}
            />
        </Row>
        <Row className="justify-content-between mb-3">
            {
                searchQuery ? <h2 className="pl-3">Showing Books For {searchQuery}</h2>
                : <h2 className="pl-3">{amountOfBooks[1]} {category} Books</h2> 
            }
            <div>
                <SelectFormInput selectOptions={categories} handleSelectChange={handleCategoryChange} />
                <SelectFormInput selectOptions={sortOrder} handleSelectChange={handleSortOrder} />
                <SelectFormInput selectOptions={resultsAmount} handleSelectChange={handleResultsPerPage} />
            </div>
        </Row>
    </>
)

export default FilterOptions

