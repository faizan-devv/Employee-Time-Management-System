import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Row, Col, Container, } from "react-bootstrap";
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";
import { Link, useHistory } from 'react-router-dom';
import Auth from '../../Auth';

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const LoginState = useSelector((state) => state.Login);
    const dispatch = useDispatch();
    useEffect(() => {
        let flag = localStorage.getItem("token") === "false" || localStorage.getItem("token") === "null" ? false : true;
        if (flag) {
            Auth.authenticate();

            history.push("/Dashboard");
        }
        if (localStorage.getItem("token") === null) {
            Auth.signout();
            history.push("/");
        }

    }, [LoginState]);

    const onChangeHandler = (e) => {
        const temp = { ...loginData };
        temp[e.target.name] = e.target.value;
        setLoginData(temp);
    };
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(allActions.LoginAction.Login(loginData));

    }
    return (

        <div className={styles.LoginWrap}>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form className={styles.Form}>
                            <h2>Log In</h2>
                            <Form.Group className="mb-3" >
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => { onChangeHandler(e) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => { onChangeHandler(e) }} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={(e) => { handleSubmit(e) }}>
                                Submit
                            </Button>
                            <p>Are you a new user ? please <Link to="/SignUp"> Sign Up</Link> </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Login;
