import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  let temp = localStorage.getItem('editId');
  let id = parseInt(temp);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Form >
          {
            props.type == 'user' ? <h2>Create New User</h2> : null
          }
          {
            props.type == 'registerManager' ? <h2>Register New Manager</h2> : null
          }
          {
            props.type == 'update' ? <h2>Update</h2> : null
          }
          <Form.Group className="mb-3" >

            <Form.Control name="firstName" type="text" placeholder="First Name" onChange={(e) => { props.change(e) }} />

          </Form.Group>
          <Form.Group className="mb-3" >

            <Form.Control name="lastName" type="text" placeholder="Last Name" onChange={(e) => { props.change(e) }} />

          </Form.Group>
          <Form.Group className="mb-3" >

            <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => { props.change(e) }} />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => { props.change(e) }} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Control name="password_confirmation" type="password" placeholder="Confirm Password" onChange={(e) => { props.change(e) }} />
          </Form.Group>
          {
            props.type == 'user' ? (<Button variant="primary" type="submit" onClick={(e) => { props.register(e) }}>
              Register User
            </Button>) : null
          }
          {
            props.type === 'registerManager' ? (<Button variant="primary" type="submit" onClick={(e) => { props.handleRegisterManager(e) }}>
              Register Manager
            </Button>) : null
          }
          {
            props.type === 'update' ? (<Button variant="primary" type="submit" onClick={(e) => { props.update(e, id) }}>
              Update
            </Button>) : null
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="w-auto btn-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
