import React from 'react';
import {Table} from 'react-bootstrap';

const UserLogTable = (props) => {
    const workHours = localStorage.getItem('workHours');
    return (
        <div  className="my-5">
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Working Hours</th>
                        <th scope="col">Description</th>
                        <th scope="col">Personal Project</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.LogsList?.map((log) => {
                            let id = log.id;
                            return (
                                <tr key={log.id} className= {workHours !=='null'?(log.hours>=workHours ? "bg-success" : "bg-danger"):null}>
                                    <th scope="row">{log.id}</th>
                                    <td>{log.log_date}</td>
                                    <td>{log.hours}</td>
                                    <td>{log.description}</td>
                                    {log.is_personal_project ? ( <td>Yes</td> ) : ( <td>No</td> )}
                                    <td><button className="btn-primary" onClick={(e) => { props.onUpdate(e, id) }}>Update</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default UserLogTable;
