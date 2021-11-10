import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

const PaginationButtons = ({ amount }) => (
  <ButtonGroup className="mr-2" aria-label="First group">
    <Button variant="outline-primary">1</Button>
  </ButtonGroup>
)

export default PaginationButtons
