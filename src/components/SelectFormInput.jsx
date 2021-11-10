const SelectFormInput = ({ selectOptions, handleCategoryChange }) => (
    <select onChange={handleCategoryChange} className='mr-3'>
        {
            selectOptions.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
        ))
        }
    </select>
)

export default SelectFormInput