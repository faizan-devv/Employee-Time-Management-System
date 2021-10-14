import React, { useState } from 'react';
import { Container, } from "react-bootstrap";
import TableComponent from '../../TableComponent';
import Pagination from '../../Pagination';
import MyVerticallyCenteredModal from '../../Modal/Modal';
import Button from 'react-bootstrap/Button';
import styles from './AdminDashboad.module.css';

const AdminDashboard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [type, setType] = useState('');
    const handleRegisterUser = () => {
        setType('user')
        setModalShow(true);
    }
    const RegisterManager=()=>{
        setType('registerManager')
        setModalShow(true);
    }
    const handleUpdate = (e, id) => {
        e.preventDefault();
        setType('update')
        setModalShow(true);
        localStorage.setItem('editId', id);
    }
    return (
        <div>
            <div>
                <Container>
                    <div className={styles.ButtonsRow} >
                        <Button classname="" variant="dark" type="submit" onClick={handleRegisterUser}>
                            Register User
                        </Button>
                       {
                           props.role === 'admin' ? (
                            <Button variant="dark" type="submit" onClick={RegisterManager}>
                            Register Manager
                        </Button>
                           ) : null
                       }
                    </div>

                    <TableComponent UsersList={props.UsersList} onDelete={props.handleDeleteUser} onUpdate={handleUpdate} role={props.role}/>

                    <Pagination
                        PageCount={props.PageCount}
                        PageChange={props.handlePageChange}
                    />
                </Container>
            </div>
            <MyVerticallyCenteredModal
                type={type}
                change={props.change}
                register={props.register}
                show={modalShow}
                onHide={() => setModalShow(false)}
                update={props.handleUpdateUser}
                handleRegisterManager={props.handleRegisterManager}
            ></MyVerticallyCenteredModal>
        </div>
    )
}

export default AdminDashboard;
