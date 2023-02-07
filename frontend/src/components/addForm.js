import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const AddForm = ({ user, handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Form>
      <Form.Group>
        <Form.Control
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          typase="textarea"
          placeholder="Address"
          value={address}
          rows={3}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="success" type="submit" block>
        Save
      </Button>
    </Form>
  );
};

export default AddForm;
