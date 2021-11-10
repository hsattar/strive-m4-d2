const SelectFormInput = ({ selectOptions, handleSelectChange }) => (
    <select onChange={handleSelectChange} className='mr-3'>
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