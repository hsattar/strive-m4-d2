import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

const PaginationButtons = ({ amount }) => (
  <ButtonGroup className="mr-2" aria-label="First group">
    {amount.map(btn => (
      <Button variant="outline-primary" key={btn}>
        {btn}
      </Button>
    ))}
  </ButtonGroup>
)

export default PaginationButtons
