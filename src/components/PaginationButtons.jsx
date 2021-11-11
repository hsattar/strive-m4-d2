import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

const PaginationButtons = ({ amount, handlePageBtnClick, selectedPage }) => (
  <ButtonGroup className="mr-2" aria-label="First group">
    {amount.map(btn => (
      <Button variant={ selectedPage === btn ? 'primary' : "outline-primary"} key={btn} onClick={handlePageBtnClick}>
        {btn}
      </Button>
    ))}
  </ButtonGroup>
)

export default PaginationButtons
