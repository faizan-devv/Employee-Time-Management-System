import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function UserLogsModel(props) {
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
                <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                    <h2>Create New Log</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Form >

                    {
                        (props.type === 'log' || props.type === 'update') ? (<div><Form.Group className="mb-3" >

                            <Form.Control name="logDate" type="date" placeholder="Select Date" onChange={(e) => { props.change(e) }} />

                        </Form.Group>
                            <Form.Group className="mb-3" >

                                <Form.Control name="hours" type="number" placeholder="Hours" onChange={(e) => { props.change(e) }} />

                            </Form.Group>
                            <Form.Group className="mb-3" >

                                <Form.Control as="textarea" name="description" placehol rows={3} placeholder="Description" onChange={(e) => { props.change(e) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="radio" label="personal projext ?" name="is_personal_project" onChange={(e) => { props.change(e) }} />
                            </Form.Group> </div>) : null
                    }
                    {
                        props.type === 'log' ? (<Button variant="primary" type="submit" onClick={(e) => { props.create(e) }}>
                            Submit
                        </Button>) : null
                    }
                    {
                        props.type === 'update' ? (<Button variant="primary" type="submit" onClick={(e) => { props.update(e, props.userId, id) }}>
                            Update
                        </Button>) : null
                    }

                    {
                        props.type === 'updateHours' ? (<div> <Form.Group className="mb-3" >

                            <Form.Control name="Working Hours" type="number" placeholder="Set Prefrefered Working Hours " onChange={(e) => { props.handleChange(e) }} />

                        </Form.Group>
                            {console.log(props.workHours)}
                            <Button variant="primary" type="submit" onClick={(e) => { props.updateHours(e, props.workHours) }}>
                                Update Working Hours
                            </Button></div>) : null
                    }

                    {
                        props.type === 'filter' ? (<div>
                            <Form.Group className="mb-3" >

                                <Form.Control name="from" type="date" placeholder="From" onChange={(e) => { props.handleFromChange(e) }} />

                            </Form.Group>
                            <Form.Group className="mb-3" >

                                <Form.Control name="to" type="date" placeholder="To" onChange={(e) => { props.handleToChange(e) }} />

                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={(e) => { props.filteredLogs(e, props.date.from, props.date.to) }}>
                                Filter
                            </Button>
                        </div>) : null
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

export default UserLogsModel;
