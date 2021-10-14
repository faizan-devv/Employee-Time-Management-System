import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Form, Row, Col, Container, } from "react-bootstrap";
import styles from './SignUp.module.css';
import { useDispatch} from "react-redux";
import allActions from "../../redux/actions";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const temp = { ...userData };
    temp[e.target.name] = e.target.value;
    setUserData(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.registerManagerAction.registerManager(userData));
  }
  return (
    <div className={styles.SignUpWrap}>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form className={styles.Form}>
              <h2>Sign Up</h2>
              <Form.Group className="mb-3" >

                <Form.Control name="firstName" type="text" placeholder="First Name" onChange={(e) => { onChangeHandler(e) }} />

              </Form.Group>
              <Form.Group className="mb-3" >

                <Form.Control name="lastName" type="text" placeholder="Last Name" onChange={(e) => { onChangeHandler(e) }} />

              </Form.Group>
              <Form.Group className="mb-3" >

                <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => { onChangeHandler(e) }} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => { onChangeHandler(e) }} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Control name="password_confirmation" type="password" placeholder="Confirm Password" onChange={(e) => { onChangeHandler(e) }} />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={(e) => { handleSubmit(e) }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )


}

export default SignUp;