import { Form, Button } from "react-bootstrap";

const addForm = () => {
  return (

    <Form>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder="Email *"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type='text'
            placeholder="Username *"
          />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type='text'
            placeholder="Full Name *"
          />
      </Form.Group>
      <Form.Group>
        <Form.Control
            typase='textarea'
            placeholder="Address *"
            rows={3}
          />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Save
      </Button>
    </Form> 
  )
}

export default addForm;