import React, { useState } from 'react';
import { Container, } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import UserLogTable from '../../UserLogTable';
import Pagination from '../../Pagination';
import UserLogsModel from '../../Modal/UserlogsModal';
import styles from './UserDashboard.module.css';
import csvReport from 'react-csv';

const UserDashboard = (props) => {
    const id = localStorage.getItem('id');
    const [modalShow, setModalShow] = useState(false);
    const [date, setDate] = useState({
        to: '',
        from: ''
    });
    const [type, setType] = useState('');
    const [workHours, setWorkHours] = useState(0);
    const handleCreateLog = () => {
        setType('log');
        setModalShow(true);
    }
    const handleUpdateWorkHours = () => {
        setType('updateHours');
        setModalShow(true);
    }
    const handleFilter = () => {
        setType('filter');
        setModalShow(true);
    }
    const handleUpdate = (e, id) => {
        e.preventDefault();
        setType('update')
        setModalShow(true);
        localStorage.setItem('editId', id);
    }
    const handleChange = (e) => {
        setWorkHours(e.target.value);
    }
    const handleToChange = (e) => {
        let temp = { ...date }
        temp.to = e.target.value;
        setDate(temp);
    }
    const handleFromChange = (e) => {
        let temp = { ...date }
        temp.from = e.target.value;
        setDate(temp);
    }
   
    return (
        <div>
            <Container>
                <div className={styles.ButtonsRow}>
                    <Button variant="dark" type="submit" onClick={(e) => { handleCreateLog(e) }}>
                        Create Log
                    </Button>
                    <Button variant="dark" type="submit" onClick={(e) => { handleUpdateWorkHours(e) }}>
                        Update Prefered Working Hours
                    </Button>
                    <Button variant="dark" type="submit" onClick={(e) => { handleFilter(e) }}>
                        Filter By Date
                    </Button>
                </div>

                <UserLogTable
                    LogsList={props.Logslist}
                    onUpdate={handleUpdate}
                    userId={id}
                />
                <Pagination
                    PageCount={props.PageCount}
                    PageChange={props.handlePageChange}
                />
            </Container>
            <UserLogsModel
                type={type}
                change={props.change}
                create={props.createWorkLog}
                show={modalShow}
                onHide={() => setModalShow(false)}
                update={props.updateLog}
                userId={id}
                workHours={workHours}
                updateHours={props.updateHours}
                handleChange={handleChange}
                handleFromChange={handleFromChange}
                handleToChange={handleToChange}
                filteredLogs={props.filteredLogs}
                date={date}
            ></UserLogsModel>
        </div>
    )
}

export default UserDashboard;
