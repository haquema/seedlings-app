import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const AddForm = ({ user, handleSubmit }) => {

const [username, setUsername] = useState(user.username);
const [email, setEmail] = useState(user.email);
const [fullName, setFullName] = useState(user.fullName);
const [address, setAddress] = useState(user.address);

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type='text'
            placeholder="Username *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type='text'
            placeholder="Full Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
      </Form.Group>
      <Form.Group>
        <Form.Control
            typase='textarea'
            placeholder="Address *"
            value={address}
            rows={3}
            onChange={(e) => setAddress(e.target.value)}
          />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Save
      </Button>
    </Form> 
  )
}

export default AddForm;