import React from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Container, } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import UserLogTable from '../UserLogTable';
import Pagination from '../Pagination';
import UserLogsModel from '../Modal/UserlogsModal';
import allActions from '../../redux/actions';
import styles from './UserDetail.module.css';


const UserDetail = () => {
    let params = useParams();
    let list = null;
    const [rerenderFlag, setRerenderFlag] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const id = params.id
    const [modalShow, setModalShow] = useState(false);
    const [type, setType] = useState('');
    const [workHours, setWorkHours] = useState(0);
    const [logData, setLogData] = useState({
        logDate: '',
        hours: 0,
        description: '',
        is_personal_project: 0
    });
    const dispatch = useDispatch();
    let Logslist = useSelector((state) => state.GetWorkLogs.apiResponse.workLogs?.data);
    let logsLastPage = useSelector((state) => state.GetWorkLogs.apiResponse.workLogs?.last_page);
    if (Logslist) {
        list = [...Logslist];
    }
    const handleUpdateWorkHours = () => {
        setType('updateHours');
        setModalShow(true);
    }
    const handleUpdate = (e, id) => {
        e.preventDefault();
        setType('update');
        setModalShow(true);
        localStorage.setItem('editId', id);
    }
    const handleChange = (e) => {
        setWorkHours(e.target.value);
    }
    

    const onLogDataChangeHandler = (e) => {
        const temp = { ...logData };
        if (e.target.value === 'on') { temp[e.target.name] = 1; }
        else {
            temp[e.target.name] = e.target.value;
        }
        setLogData(temp);
    }
    const handlePageChange = (data) => {
        let temp = data.selected + 1;
        setPageNum(temp);
        let token = localStorage.getItem('token');
        dispatch(allActions.GetUsersAction.GetUsers(token, temp));
        setRerenderFlag(!rerenderFlag);

    }

    const handleUpdateWorkingHours = (e, workingHours) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('id');
        let obj = {
            'workingHours': workingHours
        };
        dispatch(allActions.WorklogsAction.UpdateWorkingHours(obj, id, token));
        setRerenderFlag(!rerenderFlag);
    }

    const handleUpdateLog = (e, id, logid) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        let obj = logData;
        dispatch(allActions.WorklogsAction.UpdateWorkLog(obj, token, id, logid));
        setRerenderFlag(!rerenderFlag);
    }

    useEffect(() => {
        let token = localStorage.getItem('token');
        dispatch(allActions.GetWorkLogs.getWorkLogs(params.id, pageNum, token));
    }, [rerenderFlag]);

    return (

        <div>
            <Container>
                <div className={styles.ButtonsRow}>
                    <Button variant="dark" type="submit" onClick={(e) => { handleUpdateWorkHours(e) }}>
                        Update Prefered Working Hours
                    </Button>
                </div>

                <UserLogTable
                    LogsList={list}
                    onUpdate={handleUpdate}
                    userId={id}
                />
                <Pagination
                    PageCount={logsLastPage}
                    PageChange={handlePageChange}
                />
            </Container>
            <UserLogsModel
                type={type}
                change={onLogDataChangeHandler}
                show={modalShow}
                onHide={() => setModalShow(false)}
                update={handleUpdateLog}
                userId={id}
                workHours={workHours}
                updateHours={handleUpdateWorkingHours}
                handleChange={handleChange}
            ></UserLogsModel>
        </div>
    )
}

export default UserDetail;
